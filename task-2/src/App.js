import React, { Component } from "react";
import "./App.css";
import Jokes from "./containers/Jokes/Jokes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jokes/>
      </div>
    );
  }
}

export default App;
