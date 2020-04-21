import React from "react";
import "./App.css";
import Popup from "./component/popup.js";
import Trello from "./component/trello";
import ButtonClass from "./component/EventHandling";

const ArrayofObject = [
  { id: 1, text: "lorem1" },
  { id: 2, text: "lorem2" },
  { id: 3, text: "lorem3" },
];

function App() {
  return (
    <div className="container-fluid">
      <h1>Lab</h1>
      <hr />
      <div className="container">
        <h3>Card Popup</h3>
        <Popup heading="Something important"></Popup>
      </div>
      <hr />
      <div className="row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6">
          <h3>List</h3>
        </div>
        <div className="col-sm-3">
          <Trello></Trello>
        </div>
      </div>
      <hr />
      <ButtonClass></ButtonClass>
    </div>
  );
}

export default App;
