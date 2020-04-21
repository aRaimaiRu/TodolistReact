import React from "react";
import ReactDOM from "react-dom";
import "./bootstrap.min.css";

class Popup extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">{this.props.heading}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default Popup;
