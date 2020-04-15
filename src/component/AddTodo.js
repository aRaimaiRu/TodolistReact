import React from "react";
import style from "./AddToDo.module.css";

export default class AddTodo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="AddTodo">
        <input
          className={style.Input}
          placeholder="Enter Todo"
          value={this.props.Input}
          onChange={this.props.setInput}
        />
        <button onClick={this.props.setList}>ADD</button>
      </div>
    );
  }
}
