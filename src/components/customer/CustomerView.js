import React from 'react'
import { post } from 'axios';
import 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import $ from 'jquery';
window.$ = $;

const styles = theme => ({
 
    box_fullWidth: {
        width:'100%',
        margin:"0 auto",
        marginTop:'20px'
    },
    box_halfWidth_right: {
        width:'48%',
        float:'right',
        margin:"0 auto",
        marginTop:'20px'
    },
    box_halfWidth_left: {
        width:'48%',
        float:'left',
        margin:"0 auto",
        marginTop:'20px'
    },
    checkbox : {
      width:'150px',
      float:'left',
      height:'50px',
      margin:"0 auto",
      marginTop:'26px'
    },
    select1 : {
      width:'48%',
      float:'right',
      margin:"0 auto",
      marginTop:'0'
    },
    select2 : {
      width:'48%',
      float:'left',
      margin:"0 auto",
      marginTop:'28px'
    },
    btn : {
      margin : 10
    }
});

class CustomerView extends React.Component {
    constructor(props) {            
      super(props);
      this.state = {
        cust_name : this.props.c.cust_name,
        cust_type : this.props.c.cust_type,
        response_type : this.props.c.response_type,
        cust_addr : this.props.c.cust_addr,
        cust_tel : this.props.c.cust_tel,
        cust_fax : this.props.c.cust_fax,
        num_employee : this.props.c.num_employee,
        url : this.props.c.url,
        business_num : this.props.c.business_num,
        main_bussiness : this.props.c.main_bussiness,
        main_trading_company : this.props.c.main_trading_company,
        sales : this.props.c.sales,
        pc_num : this.props.c.pc_num,
        server_num : this.props.c.server_num,
        use_solution : this.props.c.use_solution,
        build_type : this.props.c.build_type,
        open:false
      }
      this.handleClickOpen = this.handleClickOpen.bind(this)
      this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen() {
      this.setState({        
        open: true
      });
    }
        
    handleClose() { 
      this.setState({
        cust_name : this.props.c.cust_name,
        cust_type : this.props.c.cust_type,
        response_type : this.props.c.response_type,
        cust_addr : this.props.c.cust_addr,
        cust_tel : this.props.c.cust_tel,
        cust_fax : this.props.c.cust_fax,
        num_employee : this.props.c.num_employee,
        url : this.props.c.url,
        business_num : this.props.c.business_num,
        main_bussiness : this.props.c.main_bussiness,
        main_trading_company : this.props.c.main_trading_company,
        sales : this.props.c.sales,
        pc_num : this.props.c.pc_num,
        server_num : this.props.c.server_num,
        use_solution : this.props.c.use_solution,
        build_type : this.props.c.build_type,
        open:false
      })
    }
 
    render() {
        const { classes } = this.props;
        
        return (
            <div>
                <Button variant="contained" color="default" className={classes.btn} id="update_btn" onClick={this.handleClickOpen}>
                    보기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                  <DialogTitle>고객사 추가</DialogTitle>
                  <DialogContent>
                    <TextField 
                      id="outlined-basic" 
                      label="고객사 명" 
                      name="cust_name"
                      multiline
                      rows={2}
                      value={this.state.cust_name}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_left}
                      autoComplete="off"
                    />
                    <FormControl className={classes.select1}>
                      <InputLabel htmlFor="age-native-simple">고객형태</InputLabel>
                      <Select labelId="demo-simple-select-label"id="demo-simple-select" label="고객형태" name="cust_type" value={this.state.cust_type} onChange={this.handleValueChange}>
                          <MenuItem value={'공공'}>공공</MenuItem>
                          <MenuItem value={'기업'}>기업</MenuItem>
                          <MenuItem value={'의료'}>의료</MenuItem>
                          <MenuItem value={'교육'}>교육</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl className={classes.select1}>
                      <InputLabel htmlFor="age-native-simple">대응형태</InputLabel>
                      <Select labelId="demo-simple-select-label"id="demo-simple-select" label="대응형태" name="response_type" value={this.state.response_type} onChange={this.handleValueChange}>
                          <MenuItem value={'DROP'}>DROP</MenuItem>
                          <MenuItem value={'EDM'}>EDM</MenuItem>
                          <MenuItem value={'잠재'}>잠재</MenuItem>
                          <MenuItem value={'유효'}>유효</MenuItem>
                          <MenuItem value={'관리'}>관리</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField 
                      id="outlined-basic" 
                      label="고객사 주소" 
                      name="cust_addr"
                      value={this.state.cust_addr}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_fullWidth}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="고객사 전화번호" 
                      name="cust_tel"
                      value={this.state.cust_tel}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_left}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="매출액(억)" 
                      name="sales"
                      value={this.state.sales}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_right}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="고객사 팩스번호" 
                      name="cust_fax"
                      value={this.state.cust_fax}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_left}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="PC 대수" 
                      name="pc_num"
                      value={this.state.pc_num}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_right}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="종업원 수" 
                      name="num_employee"
                      value={this.state.num_employee}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_left}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="서버 대수" 
                      name="server_num"
                      value={this.state.server_num}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_right}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="홈페이지 주소" 
                      name="url"
                      value={this.state.url}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_left}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="사용 솔루션" 
                      name="use_solution"
                      value={this.state.use_solution}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      multiline
                      rows={3}
                      className={classes.box_halfWidth_right}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="사업자번호" 
                      name="business_num"
                      value={this.state.business_num}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_left}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="구축 형태" 
                      name="build_type"
                      value={this.state.build_type}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      multiline
                      rows={3}
                      className={classes.box_halfWidth_right}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="주력 사업" 
                      name="main_bussiness"
                      value={this.state.main_bussiness}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_left}
                      autoComplete="off"
                    />
                    <TextField 
                      id="outlined-basic" 
                      label="IT 주거래 업체" 
                      name="main_trading_company"
                      value={this.state.main_trading_company}
                      onChange={this.handleValueChange}
                      variant="outlined"
                      className={classes.box_halfWidth_left}
                      autoComplete="off"
                    />
                  </DialogContent>
                  <DialogActions>
                      <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                      <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                  </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(CustomerView)

