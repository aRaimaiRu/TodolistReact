import React from "react";
import ReactDOM from "react-dom";
import List from "./list";

class Trello extends React.Component {
  AOO = [
    { id: 1, text: "lorem1" },
    { id: 2, text: "lorem2" },
    { id: 3, text: "lorem3" },
  ];

  render() {
    return (
      <div className="container">
        <List ArrayofObject={this.AOO}></List>
      </div>
    );
  }
}

export default Trello;
