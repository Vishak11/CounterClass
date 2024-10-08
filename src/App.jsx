import React, { Component } from "react";
import "./App.css";

class CounterApp extends Component {
  constructor(props) {
    super(props);
    // Initialize state with the count starting at 0
    this.state = {
      count: 0,
    };
  }

  // Method to increment the count
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Method to decrement the count
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        {/* Display the current count */}
        <p>Count: {this.state.count}</p>
        {/* Increment and Decrement buttons */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterApp;
