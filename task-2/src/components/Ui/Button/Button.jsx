import React, { Component } from "react";

import classes from "./Button.module.css";

class Button extends Component {

  shouldComponentUpdate(nextProps){
    return nextProps.children !== this.props.children
  }

  render() {
    console.log('Рендорю кнопку')
    return (
      <button className={classes.Button} onClick={this.props.handler} type={this.props.type}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
