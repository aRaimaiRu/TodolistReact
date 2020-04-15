import React, { useState } from "react";
import "./App.css";
import AddTodo from "./component/AddTodo";
import Todo from "./component/Todo";

function App() {
  const [Input, setInput] = useState("13456");
  const [list, setList] = useState([
    { ticked: false, data: "testdataa" },
    { ticked: false, data: "testdata3" },
  ]);

  const HandleDelete = (xidx) => () => {
    setList((oldlist) => oldlist.filter((f, fidx) => fidx != xidx));
  };

  return (
    <div className="container">
      <AddTodo
        Input={Input}
        setInput={(e) => setInput(e.target.value)}
        setList={() => {
          if (!Input) return;
          setList((oldlist) => {
            return oldlist.concat({ ticked: false, data: Input });
          });
          console.log(list);
          setInput("");
        }}
      ></AddTodo>
      {list.map((x, xidx) => (
        <Todo
          key={xidx}
          text={x.data}
          ticked={x.ticked}
          handleTick={() => {
            console.log(xidx);
            setList((oldlist) =>
              oldlist.map((l, lidx) =>
                lidx == xidx ? { ...l, ticked: !l.ticked } : l
              )
            );
          }}
          HandleDelete={HandleDelete(xidx)}
        ></Todo>
      ))}
    </div>
  );
}

export default App;
