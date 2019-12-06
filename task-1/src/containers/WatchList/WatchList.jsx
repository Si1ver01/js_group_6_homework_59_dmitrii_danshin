import React, { Component } from "react";
import classes from "./WatchList.module.css";
import TopBar from "../../components/TopBar/TopBar";
import Main from "../../components/Main/Main";

export default class WatchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topInput: "",
      inputList: localStorage.getItem("list")
        ? localStorage.getItem("list").split(",")
        : []
    };
  }

  topBarInputHandler = value => {
    this.setState({ topInput: value });
  };

  addFilmHandler = event => {
    event.preventDefault();
    const inputList = [...this.state.inputList, this.state.topInput];
    this.setState({ topInput: "", inputList });
  };

  changeFilmTitle = (value, index) => {
    this.setState(prevState => prevState.inputList.splice(index, 1, value));
  };

  deleteFilm = index => {
    this.setState(prevState => prevState.inputList.splice(index, 1));
  };

  componentDidUpdate(){
    localStorage.setItem("list", this.state.inputList);
  }

  render() {
    return (
      <div className={classes.WatchList}>
        <TopBar
          value={this.state.topInput}
          handlerInput={this.topBarInputHandler}
          handlerButton={this.addFilmHandler}
        />
        <Main
          list={this.state.inputList}
          handlerInput={this.changeFilmTitle}
          handlerButton={this.deleteFilm}
        />
      </div>
    );
  }
}
