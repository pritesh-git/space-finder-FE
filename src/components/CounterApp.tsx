import React from "react";
import "../styles/CounterStyle.css";
interface counterState {
  count: number;
}

export default class CounterApp extends React.Component<{}, counterState> {
  state: counterState = {
    count: 0,
  };

  private incrementCounter() {
    if (this.state.count < 100)
      this.setState({
        count: this.state.count + 1,
      });
  }

  private decreaseCounter() {
    if (this.state.count > 0)
      this.setState({
        count: this.state.count - 1,
      });
  }

  render() {
    return (
      <div className="divStyle">
        Counter: {this.state.count} <br />
        <button className="btnStyle" onClick={() => this.incrementCounter()}>
          Increase
        </button>
        <button className="btnStyle" onClick={() => this.decreaseCounter()}>
          Decrease
        </button>
      </div>
    );
  }
}
