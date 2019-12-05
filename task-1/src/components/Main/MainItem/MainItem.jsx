import React, { Component } from "react";

import classes from "./MainItem.module.css";
import Input from "../../Ui/Input/Input";
import Button from "../../Ui/Button/Button";

class MainItem extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log("Я рендорю элемент с текстом", this.props.text);
    return (
      <div className={classes.MainItem}>
        <Input value={this.props.text} handler={this.props.handlerInput} />
        <Button handler={this.props.handlerButton}>Delete</Button>
      </div>
    );
  }
}

export default MainItem;
