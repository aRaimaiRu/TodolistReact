import React from "react";
import ReactDOM from "react-dom";

class Todolist extends React.Component {
  state = [];

  HandlingState = (e) => {
    this.setState();
  };
  render() {
    return (
      <div className="container">
        Add
        <input id="input" required />
        <button id="AddBtd" onClick={this.HandlingState}>
          Add
        </button>
        <ul>
          {this.state.map((item) => {
            return <li key={item.Des}>{item.Des} </li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Todolist;
