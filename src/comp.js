import React from "react";
import { Component } from "react";
import "./styles.css";
class Comp extends Component {
  constructor() {
    super();
    this.handleClickPlus = this.handleClick.bind(this);
  }
  state = {
    count: 0,
  };
  handleClick = (type) => {
    if (type == "plus") {
      this.setState({
        count: this.state.count + 1,
      });
    } else if (type == "minus") {
      if (this.state.count != 0) {
        this.setState({
          count: this.state.count - 1,
        });
      }
    } else if (type == "reset") {
      this.setState({
        count: 0,
      });
    }
  };

  render() {
    return (
      <div className="main">
        <div className="wrapper">
          <button
            onClick={() => this.handleClick("minus")}
            className={this.state.count == 0 ? "button disabled" : "button"}
          >
            -
          </button>
          <p className="result">{this.state.count}</p>
          <button onClick={() => this.handleClick("plus")} className="button">
            +
          </button>
        </div>
        <button className="button" onClick={() => this.handleClick("reset")}>
          Reset
        </button>
      </div>
    );
  }
}

export default Comp;
