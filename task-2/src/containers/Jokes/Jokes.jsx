import React, { Component } from "react";
import TopBar from "../../components/TopBar/TopBar";
import classes from "./Jokes.module.css";
import Main from "../../components/Main/Main";
import axios from "../../axios.js";

export default class Jokes extends Component {
  state = {
    jokes: [],
    quantity: 1,
    showPreloader: false
  };

  showJoke = async event => {
    event.preventDefault();
    this.setState({ showPreloader: true });
    const promises = [];

    for (let i = 0; i < this.state.quantity; i++) {
      promises.push(axios.get());
    }

    try {
      const response = await Promise.all(promises);
      const newResponse = response.map(elem => elem.data.value);
      this.setState({ jokes: newResponse, showPreloader: false });
    } catch (error) {
      console.log(error);
    }
  };

  inputHandler = value => {
    this.setState({ quantity: value ? Math.abs(parseInt(value)) : '' });
  };

  render() {
    return (
      <div className={classes.Jokes}>
        <TopBar
          inputHandler={this.inputHandler}
          value={this.state.quantity}
          buttonHandler={this.showJoke}
        />
        <Main list={this.state.jokes} preloader={this.state.showPreloader} />
      </div>
    );
  }
}
