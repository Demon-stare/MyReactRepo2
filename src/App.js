import React, { Component } from "react";
import "./styles.css";
import "@material-ui/core/Button";
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

class Counter extends Component {
  state = {
    count: 0
  };
  handleclick = () => {
    if (this.state.count < "15") {
      this.setState(({ count }) => ({
        count: count + 1
      }));
    } else {
      this.setState(({ count }) => ({
        count: "inka pani yem ledhu entra..?"
      }));
    }
  };
  render() {
    return (
      <div>
        <h1>Yelcome</h1>
        <Button onClick={this.handleclick} variant="contained" color="primary">
          {this.state.count}
        </Button>
      </div>
    );
  }
}

export default App;
