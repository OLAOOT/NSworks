import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import $ from "jquery";
window.$ = $;
const styles = (theme) => ({
  btn: {
    background: "#6bbf24",
    color: "#ffffff",
    "&:hover": {
      background: "#64A538"
    }
  },
  btn_close: {
    margin: "10px 15px"
  },
  box_fullWidth: {
    width: "100%",
    margin: "0 auto",
    marginTop: "20px"
  }
});

class JournalDelete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({
      open: true
    });
  }

  handleClose() {
    this.setState({
      open: false
    });
  }

  deleteCustomer(id) {
    const url = "/api/board/" + id;
    fetch(url, {
      method: "DELETE"
    });
    this.props.stateRefresh();
  }

  submit = (e) => {
    if ($("#name").val().length < 1) {
      alert("제목을 입력해주세요");
      $("#name").focus();
    } else if ($("#message").val().length < 1) {
      alert("내용을 입력해주세요");
      $("#message").focus();
    } else {
      $.ajax({
        type: "POST",
        url:
          "https://script.google.com/macros/s/AKfycbze2iAR9zm33qhf0u_VZZqhZzB8twPQTrVvsvCGyQ/exec", // 통신할 url을 지정
        data: {
          name: $("#name").val(),
          message: $("#message").val(),
          email: $("#email").val()
        }, // 서버로 데이터 전송시 옵션
        dataType: "json",
        success: function (response) {
          alert("전송되었습니다.");
          $("#name").val("");
          $("#message").val("");
          $("#gform_btn").css("display", "block");
        },
        error: function (request, status, error) {
          // 통신 실패시 - 로그인 페이지 리다이렉트
          //alert("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);
          alert("잘못 기입된 곳이 없는지 확인해주세요");
        }
      });
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="contained"
          className={classes.btn}
          onClick={this.handleClickOpen}
        >
          문의하기
        </Button>
        <Dialog
          onClose={this.handleClose}
          open={this.state.open}
          fullWidth
          maxWidth="lg"
        >
          <DialogTitle onClose={this.handleClose}>문의하기</DialogTitle>
          <DialogContent>
            <form
              className="gForm"
              method="POST"
              data-email="shkim061198@gmail.com"
              action="https://script.google.com/macros/s/AKfycbze2iAR9zm33qhf0u_VZZqhZzB8twPQTrVvsvCGyQ/exec"
              autoComplete="off"
            >
              <fieldset className="mail_container">
                <TextField
                  id="name"
                  name="name"
                  variant="outlined"
                  label="제목"
                  className={classes.box_fullWidth}
                />
              </fieldset>
              <fieldset className="mail_container">
                <TextField
                  id="message"
                  name="message"
                  label="내용을 입력해주세요."
                  variant="outlined"
                  multiline
                  rows={10}
                  className={classes.box_fullWidth}
                />
              </fieldset>
              <fieldset className="mail_container">
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  variant="outlined"
                  label="답변받을 연락처"
                  className={classes.box_fullWidth}
                />
              </fieldset>
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              color="primary"
              onClick={this.submit}
              className={classes.btn}
            >
              제출하기
            </Button>
            <Button
              variant="outlined"
              onClick={this.handleClose}
              className={classes.btn_close}
            >
              닫기
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(JournalDelete);
