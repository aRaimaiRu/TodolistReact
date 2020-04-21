import React from "react";
import ReactDOM from "react-dom";

class ButtonClass extends React.Component {
  state = {
    name: "john",
    skill: [{ id: 1, name: "C" }],
  };
  HandlingButton = (e) => {
    this.setState({ name: this.state.name == "john" ? "smite" : "john" });
  };
  HandlingSkill = (e) => {
    this.setState({
      skill:
        this.state.skill.length < 2
          ? [
              { id: 3, name: "Java" },
              { id: 4, name: "C++" },
              { id: 5, name: "Javascript" },
            ]
          : [{ id: 1, name: "C" }],
    });
  };
  render() {
    return (
      <div>
        <button name="ButonName" onClick={this.HandlingButton}>
          Click Me {this.state.name}
        </button>

        <button name="ButonSkill" onClick={this.HandlingSkill}>
          Click Me {this.state.skill.map((s) => s.name)}
        </button>
      </div>
    );
  }
}

export default ButtonClass;
