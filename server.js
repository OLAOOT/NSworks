const fs = require('fs');
const express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const router = express.Router();
const crypto = require('crypto');
const app = express();
const port = process.env.PORT || 5000;
const session = require('express-session');
const FileStore = require('session-file-store')(session); // 1

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const multer = require('multer');
const upload = multer({dest:'./upload'})

/*db info*/
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

app.use('/image',express.static('./upload'));

app.use(session({ 
    secret: 'keyboard cat',  // 암호화
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
  }));

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
    
connection.connect()

app.post('/auth/login',upload.single('image'),(req,res) =>{
    let body = req.body;
    let id = body.userId;
    let split_id = '';

    if(!id.indexOf('admin')){
        split_id = id.replace('admin','')
    }
    let sql = 'SELECT * FROM CUSTOMER WHERE id = ?';
    let params = [split_id];
    connection.query(sql, params,
        (err, rows, fields) => {
            console.log(rows.length)
            if(rows.length < 1){  
                res.send('아이디 불일치'); 
            }
            else{
                let dbPassword = rows[0].PASSWORD
                let inputPassword = body.passwd;
                let hashPassword = crypto.createHash("sha512").update(inputPassword).digest("hex");

                if(dbPassword === hashPassword){
                    console.log("비밀번호 일치");
                    //res.redirect("/user");
                    req.session.logined = true;
                    req.session.user_id = split_id;
                    req.session.name = rows[0].name;

                    console.log('비밀번호 일치, session 생성 : '+req.session)
                    res.send('로그인 성공');
                }
                else{
                    console.log("비밀번호 불일치");
                    res.send('비밀번호 불일치');
                }
            }       
        }    
    )    
});

app.get('/logout' ,function(req, res){
    sess = req.session;
    req.session.destroy(function(err){
        if(err){
            console.log(err);
        }
    })
})

app.get('/get_session', (req, res) => {
    //console.log('불러온 세션 : '+req.session.logined+','+req.session.user_id)
    
    res.send(req.session);                         
                
});

app.get('/api/profile', (req, res) => {
    let sql = 'SELECT * FROM CUSTOMER WHERE id = ?';
    let params = [req.session.user_id];
    
    connection.query(sql, params,
        (err, rows, fields) => {
            
            res.send(rows);
        }
    )
});


app.get('/api/admins', (req, res) => {
    connection.query(
        'SELECT * FROM CUSTOMER WHERE isDeleted = 0',   
        (err, rows, fields) => {    
            res.send(rows);    
        }    
    )
});
    
app.post('/api/admins',upload.single('image'),(req,res) =>{
    console.log(req.body)
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0, ?)';
    let image =''
    if(req.file === undefined)
        image = '/image/user.png';    
    else
        image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;    
    let hashPassword = crypto.createHash("sha512").update('1111').digest("hex");    
    let params = [image, name, birthday, gender, job,hashPassword];
    console.log('something inserted!!')

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.post('/api/admins/:id',upload.single('image'), (req, res) => {
    
    let sql;
    let params;
    let image =''
    if(typeof req.file === 'undefined'){
        console.log(req.body.image)
        image = req.body.image;    
    }
    else
        image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let hashPassword;
    if(req.body.passwd === ''){
        sql = 'UPDATE CUSTOMER SET image = ?,name = ?, birthday=?, gender=?, job=? WHERE id = ?';
        params = [image, name, birthday, gender, job, req.params.id];        
    }
    else{
        sql = 'UPDATE CUSTOMER SET image = ?,name = ?, birthday=?, gender=?, job=?, PASSWORD=? WHERE id = ?';
        hashPassword = crypto.createHash("sha512").update(req.body.passwd).digest("hex");    
        params = [image, name, birthday, gender, job, hashPassword, req.params.id];
    }
    
    
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
    
});

app.delete('/api/admins/:id', (req, res) => {
    let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.get('/api/customers', (req, res) => {
    connection.query(
        'SELECT * FROM CUSTOMERS',   
        (err, rows, fields) => {    
            res.send(rows);    
        }    
    )
});

app.get('/api/cust_name', (req, res) => {
    connection.query(
        'SELECT cust_name FROM CUSTOMERS',   
        (err, rows, fields) => {    
            res.send(rows);    
        }    
    )
});

app.get('/api/manager_name', (req, res) => {
    connection.query(
        'SELECT name FROM MANAGERS',   
        (err, rows, fields) => {    
            res.send(rows);    
        }    
    )
});

app.post('/api/customers',upload.single('image'),function(req,res) {
    console.log(req.body)
    
    let sql = 'INSERT INTO CUSTOMERS VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    let cust_name = req.body.cust_name;
    let cust_type = req.body.cust_type;
    let response_type = req.body.response_type;
    let cust_addr = req.body.cust_addr;
    let cust_tel = req.body.cust_tel;
    let cust_fax = req.body.cust_fax;
    let num_employee = req.body.num_employee;
    let url = req.body.url;
    let business_num = req.body.business_num;
    let main_business = req.body.main_bussiness;
    let main_trading_company = req.body.main_trading_company;
    let sales = req.body.sales;
    let pc_num = req.body.pc_num;
    let server_num = req.body.server_num;
    let use_solution = req.body.use_solution;
    let build_type = req.body.build_type;

    let params = [cust_name,cust_type,response_type,cust_addr,cust_tel,cust_fax,num_employee,url,business_num,main_business,main_trading_company,sales,pc_num,server_num,use_solution,build_type];
    console.log('something inserted!!')

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    ) 
});

app.post('/api/customers/:id',upload.single('image'), (req, res) => {
    console.log(req.body)
    let sql = 'UPDATE CUSTOMERS SET cust_name = ?,cust_type = ?, repoonse_type=?,'
        sql+=' cust_addr=?, cust_tel=?, cust_fax=?, num_employee=?, url=?, business_num=?,'
        sql+=' main_business=?, main_trading_company=?, sales=?, pc_num=?, server_num=?,'
        sql+=' use_solution=?, build_type=? WHERE id=?';
    
    let cust_name = req.body.cust_name;
    let cust_type = req.body.cust_type;
    let response_type = req.body.response_type;
    let cust_addr = req.body.cust_addr;
    let cust_tel = req.body.cust_tel;
    let cust_fax = req.body.cust_fax;
    let num_employee = req.body.num_employee;
    let url = req.body.url;
    let business_num = req.body.business_num;
    let main_business = req.body.main_business;
    let main_trading_company = req.body.main_trading_company;
    let sales = req.body.sales;
    let pc_num = req.body.pc_num;
    let server_num = req.body.server_num;
    let use_solution = req.body.use_solution;
    let build_type = req.body.build_type;

    let params = [cust_name,cust_type,response_type,cust_addr,cust_tel,cust_fax,num_employee,url,business_num,main_business,main_trading_company,sales,pc_num,server_num,use_solution,build_type,req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.delete('/api/customers/:id', (req, res) => {
    let sql = 'DELETE FROM CUSTOMERS WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.get('/api/managers', (req, res) => {
    connection.query(
        'SELECT * FROM MANAGERS',   
        (err, rows, fields) => {    
            res.send(rows);    
        }    
    )
});

app.post('/api/managers',upload.single('image'),function(req,res) {
    console.log(req.body)
    
    let sql = 'INSERT INTO MANAGERS VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    let cust_name = req.body.cust_name;
    let name = req.body.name;
    let department = req.body.department;
    let position = req.body.position;
    let task = req.body.task;
    let tel1 = req.body.tel1;
    let tel2 = req.body.tel2;
    let email = req.body.email;
    let subemail = req.body.subemail;
    let birthday = req.body.birthday;
    let decision_power = req.body.decision_power;
    let edm_type = req.body.edm_type;
    let reference = req.body.reference;
    
    let params = [cust_name, name, department, position, task, tel1, tel2, email, subemail, birthday, decision_power, edm_type, reference];
    console.log('something inserted!!')

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    ) 
});

app.post('/api/managers/:id',upload.single('image'), (req, res) => {
    
    let sql = 'UPDATE MANAGERS SET cust_name = ?,name = ?, department=?, position=?, task=?, tel1=?, tel2=?, email=?, subemail=?, birthday=?, decision_power=?, edm_type=?, reference=? WHERE id=?';
    let cust_name = req.body.cust_name;
    let name = req.body.name;
    let department = req.body.department;
    let position = req.body.position;
    let task = req.body.task;
    let tel1 = req.body.tel1;
    let tel2 = req.body.tel2;
    let email = req.body.email;
    let subemail = req.body.subemail;
    let birthday = req.body.birthday;
    let decision_power = req.body.decision_power;
    let edm_type = req.body.edm_type;
    let reference = req.body.reference;
    
    let params = [cust_name, name, department, position, task, tel1, tel2, email, subemail, birthday, decision_power, edm_type, reference,req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.delete('/api/managers/:id', (req, res) => {
    let sql = 'DELETE FROM MANAGERS WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
    
});

app.get('/api/popup', (req, res) => {
    connection.query(
        'SELECT * FROM POPUP WHERE id=1',   
        (err, rows, fields) => {               
            res.send(rows);    
        }    
    )
});

app.post('/api/popup',upload.single('image'),(req,res) => {
    console.log(req.body)
    let image =''
    let sql = 'UPDATE POPUP SET img = ?,content = ?  WHERE id=1';
    if(typeof req.file === 'undefined'){
        console.log(req.body.image)
        image = req.body.image;    
    }
    else
        image = '/image/' + req.file.filename;
    let content = req.body.content;
    let params = [image, content];
    

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    ) 
});

app.get('/api/board', (req, res) => {
    connection.query(
        'SELECT * FROM BOARD where is_delete = 0',   
        (err, rows, fields) => {               
            res.send(rows);    
        }    
    )
});

app.post('/api/board',upload.single('image'),function(req,res) {
    console.log(req.body)
    
    let sql = 'INSERT INTO BOARD(title, content, created_date) VALUES(?,?, now())';
    
    let title = req.body.title;
    let content = req.body.content;

    let params = [title,content];
    console.log('something inserted!!')

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    ) 
});

app.post('/api/board/:id',upload.single('image'), (req, res) => {
    console.log(req.body)
    let sql = 'UPDATE BOARD SET title = ?,content = ? where id=?';
    
    let title = req.body.title;
    let content = req.body.content;

    let params = [title,content,req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.delete('/api/board/:id', (req, res) => {
    let sql = 'UPDATE BOARD SET is_delete = 1 WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.get('/api/journal', (req, res) => {
    let sql = 'SELECT * FROM JOURNALS WHERE user_id = ?';
    let params = [req.session.user_id];    
    if(req.session.user_id === '1')   
      sql = 'SELECT JOURNALS.*, CUSTOMER.name FROM JOURNALS INNER JOIN CUSTOMER ON JOURNALS.user_id = CUSTOMER.id ';
    
    connection.query(sql, params,
        (err, rows, fields) => { 
            res.send(rows);
        }
    )
});

app.post('/api/journal',upload.single('image'),function(req,res) {
    let sql = 'INSERT INTO JOURNALS VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    let userId = req.session.user_id;
    let date_arr = req.body.date.split(' ')
    let date = date_arr[3]+'/'+date_arr[1]+'/'+date_arr[2];
    let classification = req.body.classification;
    let cust_name = req.body.cust_name;
    let cust_manager = req.body.cust_manager;
    let serial_no = req.body.serial_no;
    let case_id = req.body.case_id;
    let approach = req.body.approach;
    let contact = req.body.contact;
    let content = req.body.content;
    let model = req.body.model;
    let part = req.body.part;
    let reference = req.body.reference;
    
    let params = [userId, date, classification, cust_name, cust_manager, serial_no, case_id, approach, contact, content, model, part, reference];
    console.log('something inserted!!')

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
    
});

app.post('/api/journal/:id',upload.single('image'), (req, res) => {
    let sql = 'UPDATE JOURNALS SET created_date = ?,classification = ?, cust_name=?,cust_manager=?, serial_no=?, case_id=?, approach=?, contact=?, content=?, model=?, part=?, reference=? WHERE id = ?';
    let date_arr = req.body.date.split(' ')
    if(date_arr[3])
        var date = date_arr[3]+'/'+date_arr[1]+'/'+date_arr[2];
    else
        var date = req.body.date
    let classification = req.body.classification;
    let cust_name = req.body.cust_name;
    let cust_manager = req.body.cust_manager;
    let serial_no = req.body.serial_no;
    let case_id = req.body.case_id;
    let approach = req.body.approach;
    let contact = req.body.contact;
    let content = req.body.content;
    let model = req.body.model;
    let part = req.body.part;
    let reference = req.body.reference;
    
    let params = [date, classification, cust_name, cust_manager, serial_no, case_id, approach, contact, content, model, part, reference,req.params.id];

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
    
});

app.delete('/api/journal/:id', (req, res) => {
    let sql = 'DELETE  FROM JOURNALS WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.get('/api/attendance', (req, res) => {
    let sql = 'SELECT * FROM ATTENDANCE WHERE user_id = ?';
    if(req.session.user_id === '1')
        sql = 'SELECT ATTENDANCE.*, CUSTOMER.name FROM ATTENDANCE INNER JOIN CUSTOMER ON ATTENDANCE.user_id = CUSTOMER.id';
    let params = [req.session.user_id];    
    connection.query(sql, params,
        (err, rows, fields) => {
            
            res.send(rows);
        }
    )
});

app.post('/api/attendance',upload.single('image'),function(req,res) {
    console.log(req.body)
    
    let sql = 'INSERT INTO ATTENDANCE VALUES (null, ?, ?, ?, ?, ?)';
    
    let userId = req.session.user_id;
    let attendace_type = req.body.attendace_type;
    let date = req.body.date
    let latitude = req.body.latitude;    
    let longitude = req.body.longitude;    
    
    let params = [userId, date, latitude, longitude,attendace_type];
    console.log('something inserted!!')

    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
    
});

app.delete('/api/attendance/:id', (req, res) => {
    let sql = 'DELETE FROM ATTENDANCE WHERE id = ?';
    let params = [req.params.id];
    connection.query(sql, params,
        (err, rows, fields) => {
            res.send(rows);
        }
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));