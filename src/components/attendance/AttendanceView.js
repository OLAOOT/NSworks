/*global kakao */
import React from 'react'
import { post } from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
    hidden: {
        display: 'none'
    },
    formControl: {
        marginTop: theme.spacing(1),
        minWidth: 120,
      },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },  
    box: {
        width:'95%',
        margin:"0 auto",
        marginTop:'20px'
    },
    map: {
        width:'95%',
        height:200
    },
    btn:{
        margin:10,        
    },
});

class AttendanceView extends React.Component {
    constructor(props) {            
        super(props);
        this.state = {
            attendace_type: this.props.type,  
            date : this.props.date,
            latitude : this.props.latitude,
            longitude : this.props.longitude,
            open: this.props.open
        }        
        this.addAttendance = this.addAttendance.bind(this)    
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
        
    }

    componentDidMount(){        
        if (navigator.geolocation) { // GPS를 지원하면
            
            navigator.geolocation.getCurrentPosition((position) => {                
                this.setState({
                    latitude: position.coords.latitude,  
                    longitude : position.coords.longitude,
                })   
              }, (error) => {
                console.error(error);
              }, {
                enableHighAccuracy: false,
                maximumAge: 0,
                timeout: Infinity
            });        
                
        } 
        else {
            alert('GPS를 지원하지 않습니다');
        }
    }
    
    

    addAttendance(){
        const url = '/api/attendance';
        const formData = new FormData();
        formData.append('attendace_type', this.state.attendace_type)
        formData.append('date', this.state.date)
        formData.append('latitude', this.state.latitude)
        formData.append('longitude', this.state.longitude)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }

    handleClickOpen() {        
        const script = document.createElement("script");
        script.async = true;
        script.src = "https://dapi.kakao.com/v2/maps/sdk.js?appkey=c32c1763e65921610b0b14021a17138f&autoload=false";
        document.head.appendChild(script);
        script.onload = () => {
            kakao.maps.load(() => {                
                let container = document.getElementById('Mymap');
                let options = {
                  center: new kakao.maps.LatLng(this.state.latitude, this.state.longitude),
                  level: 4
                };
        
                const map = new window.kakao.maps.Map(container, options);
                var markerPosition  = new kakao.maps.LatLng(this.state.latitude, this.state.longitude); 

                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    position: markerPosition
                });

                // 마커가 지도 위에 표시되도록 설정합니다
                marker.setMap(map);
            });
        };
        
        this.setState({        
            open: true
        });
    }
        
    handleClose() { 
        this.setState({
            title: '',  
            date : new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString(),
            content : '',
            open: false
        })
    }
 

    render() {
        const { classes } = this.props;
        
        return (
            <div>
                <Button variant="contained" className={classes.btn} color="primary" onClick={this.handleClickOpen}>
                    보기
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>출결 추가</DialogTitle>
                    <DialogContent>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-native-simple">출결 타입</InputLabel>
                            <Select labelId="demo-simple-select-label"id="demo-simple-select" label="타입" name="attendace_type" value={this.state.attendace_type} onChange={this.handleValueChange} disabled>
                                <MenuItem value={'go'}>출근</MenuItem>
                                <MenuItem value={'off'}>퇴근</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField 
                            id="outlined-basic" 
                            label="date" 
                            name="date"
                            value={this.state.date}
                            variant="outlined"
                            className={classes.box}
                            readOnly
                        />
                        <div id="Mymap"></div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>      
            </div>
        )
    }
}

export default withStyles(styles)(AttendanceView)

