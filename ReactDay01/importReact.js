import React from "react";
import Babel from "babel";

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

ReactDOM.render(<Hello name="winne" />, root);
