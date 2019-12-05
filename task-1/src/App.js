import React, { Component } from "react";
import "./App.css";
import WatchList from "./containers/WatchList/WatchList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WatchList />
      </div>
    );
  }
}

export default App;
