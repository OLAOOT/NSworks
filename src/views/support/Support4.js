import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TopImage from "../../components/sections/TopImage";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import CircularProgress from "@material-ui/core/CircularProgress";
import { fade } from "@material-ui/core/styles/colorManipulator";

import "../../css/support.css";

const img_data = {
  image: "banner1.jpg",
  title: "자료실",
  menu1: "기술문의",
  menu2: "자료실"
};

function sleep(ms) {
  //sleep 함수
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const styles = (theme) => ({
  img: {
    width: 100
  },
  menu: {
    marginTop: 80,
    marginBottom: 15,
    marginRight: "2.5%",
    display: "flex",
    justifyContent: "flex-end"
  },
  paper: {
    width: "100%",

    float: "right",
    overflow: "auto",
    "& > table": {
      minWidth: "100%"
    },
    marginTop: "80px",
    marginBottom: "50px"
  },
  table: {
    minWidth: 1080
  },
  tableRow: {
    height: 150,
    cursor: "pointer"
  },
  progress: {
    margin: 20
  },
  tableHead: {
    fontSize: "13px",
    textAlign: "center"
  },
  tableBody: {
    textAlign: "center"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 10,
      width: "auto"
    }
  }
});

class Boards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: "",
      completed: 0
    };
    this.stateRefresh = this.stateRefresh.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(e) {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  stateRefresh() {
    this.setState({
      boards: "",
      completed: 0
    });

    this.callApi()
      .then((res) => this.setState({ boards: res }))
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then((res) => this.setState({ boards: res }))
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  callApi = async () => {
    await sleep(500);
    const response = await fetch("/api/board");
    const body = await response.json();

    return body;
  };

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    const cellList2 = ["날짜", "제목", "내용"];
    const filteredComponents = (data) => {
      return data.reverse().map((c) => {
        return (
          <BoardList
            stateRefresh={this.stateRefresh}
            tableRow={classes.tableRow}
            tableBody={classes.tableBody}
            key={c.id}
            id={c.id}
            c={c}
          />
        );
      });
    };
    return (
      <div>
        <TopImage data={img_data} />
        <div className="maintenance_container">
          <Paper className={classes.paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {cellList2.map((c) => {
                    return (
                      <TableCell className={classes.tableHead} key={c}>
                        {c}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.boards ? (
                  filteredComponents(this.state.boards)
                ) : (
                  <TableRow>
                    <TableCell colSpan="6" align="center">
                      <CircularProgress
                        className={classes.progress}
                        variant="determinate"
                        value={this.state.completed}
                      />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </div>
    );
  }
}

class BoardList extends React.Component {
  render() {
    const date = this.props.c.created_date;
    var changed_date = date.substring(0, 10);
    return (
      <TableRow className={this.props.tableRow} id="row">
        <TableCell className={this.props.tableBody}>{changed_date}</TableCell>
        <TableCell className={this.props.tableBody}>
          {this.props.c.title}
        </TableCell>
        <TableCell className={this.props.tableBody}>
          {this.props.c.content}
        </TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(Boards);
