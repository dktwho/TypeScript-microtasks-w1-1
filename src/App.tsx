import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewComponent } from "./components/NewComponent";
import { Cars } from "./components/Cars";
import { Other } from "./components/Other";
function App() {
  return (
    <div className="App">
      <NewComponent
        students={[
          { id: 1, name: "Bill", age: 25 },
          { id: 2, name: "Bob", age: 35 },
        ]}
      />
      <Cars
        cars={[
          { manufacturer: "BMW", model: "m5cs" },
          { manufacturer: "Mercedes", model: "e63s" },
          { manufacturer: "Audi", model: "rs6" },
        ]}
      />
      <Other />
    </div>
  );
}

export default App;
