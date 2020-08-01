import React from "react";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/captioned.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TopImage from "../../components/sections/TopImage";

import "../../css/q&r.css";
import $ from "jquery";
window.$ = $;

const useStyles = makeStyles(theme => ({
    none: {
      display: 'none'
    },
    style1 :{
        height:40,
        borderBottom:'1px solid #676767'
    }
    
  }));

const img_data = {
  image: "./../../img/slider1.jpg",
  title: "문의"
};

export default function Question() {
  const classes = useStyles();

  const submit = e => {
    
    if($('#name').val().length < 1){
        alert('제목을 입력해주세요')
        $('#name').focus()
    }
    else if($('#message').val().length < 1){
        alert('내용을 입력해주세요')
        $('#message').focus()
    }
    else{
        $.ajax({ 
            type: "POST", 
            url: "https://script.google.com/macros/s/AKfycbze2iAR9zm33qhf0u_VZZqhZzB8twPQTrVvsvCGyQ/exec", // 통신할 url을 지정
            data: {'name': $('#name').val(),'message':$('#message').val(),'email':$('#email').val()}, // 서버로 데이터 전송시 옵션
            dataType: "json", 
            success: function(response){ 
                alert('전송되었습니다.');
                $('#name').val('');
                $('#message').val('');
                $("#gform_btn").css('display','block')
            },
            error: function(request, status, error){ // 통신 실패시 - 로그인 페이지 리다이렉트
                //alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
                alert("잘못 기입된 곳이 없는지 확인해주세요");
            },
        });
    }
        
  };
  return (
    <div>
        
        <TopImage data={img_data} />
        <div className="service_article_container">
            <div className="article">
                <form className="gForm" method="POST" data-email="shkim061198@gmail.com" action="https://script.google.com/macros/s/AKfycbze2iAR9zm33qhf0u_VZZqhZzB8twPQTrVvsvCGyQ/exec" autoComplete="off">
                    <fieldset className="mail_container" >
                        <TextField id="name"  name="name" variant="outlined" label="제목" />
                    </fieldset>
                    <fieldset className="mail_container">
                        <TextField id="message"  name="message" label="내용을 입력해주세요." variant="outlined" multiline rows={10}/>
                    </fieldset>
                    <fieldset className="mail_container">
                        <TextField id="email"  name="email" type="email" variant="outlined" label="답변을 윈하시면 이메일을 적어주세요" />
                    </fieldset>
                    <div>
                        <Button variant="contained" color="primary" onClick={submit} className={classes.btn}>제출하기</Button>
                    </div>
                </form>
            </div>
      </div>
    </div>
  );
}
