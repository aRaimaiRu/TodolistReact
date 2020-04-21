import React from "react";
import ReactDOM from "react-dom";

class List extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">Featured</div>
        <ul className="list-group list-group-flush">
          {this.props.ArrayofObject.map((item) => {
            return (
              <li className="list-group-item" key={this.id}>
                {item.text}
              </li>
            );
          })}
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    );
  }
}

export default List;
