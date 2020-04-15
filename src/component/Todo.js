import React, { useState } from "react";
import styles from "./Todo.module.css";

export default class Todo extends React.Component {
  render() {
    return (
      <div className={styles.Root}>
        <span
          className={styles.Tick}
          style={{ backgroundColor: this.props.ticked ? "#8A2BE2" : undefined }}
          onClick={this.props.handleTick}
        />
        <div
          className={styles.Text}
          style={{
            textDecoration: this.props.ticked ? "line-through" : undefined,
          }}
        >
          {this.props.text}
        </div>
        <span className={styles.Delete} onClick={this.props.HandleDelete}>
          x
        </span>
      </div>
    );
  }
}
