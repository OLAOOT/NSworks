const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*db info*/
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
    
connection.connect()

app.get('/api/board', (req, res) => {
    
    connection.query(
        'SELECT * FROM BOARD where is_delete = 0',   
        (err, rows, fields) => {               
            res.send(rows);   
            console.log(rows) 
        }    
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`));