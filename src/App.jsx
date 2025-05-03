import { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.countHandler = this.countHandler.bind(this);
  }

  countHandler() {
    return this.setState((prev) => {
      prev.counter = prev.counter + 1;
      return prev;
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.countHandler}>click</button>
      </>
    );
  }
}

export default App;
