import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewComponent } from "./components/NewComponent";

function App() {
  return (
    <div className="App">
      <NewComponent
        students={[
          { id: 1, name: "Bill", age: 25 },
          { id: 2, name: "Bob", age: 35 },
        ]}
      />
    </div>
  );
}

export default App;
