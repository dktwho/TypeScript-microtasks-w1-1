import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { NewComponent } from "./components/NewComponent";
import { Cars } from "./components/Cars";
import { Other } from "./components/Other";
import { Other2 } from "./components/Other2";
import { Button } from "./components/Button";
import { StatePractice } from "./components/StatePractice";
import { MethodFilter } from "./components/MethodFilter";

function App() {
  const button1Foo = (floor: number, floorInWords: string) => {
    console.log(
      `This is floor number ${floor}  | floor in words: ${floorInWords}`
    );
  };

  const button2Foo = (floor: number, floorInWords: string) => {
    console.log(
      `This is floor number ${floor}  | floor in words: ${floorInWords}`
    );
  };

  const button3Foo = (floor: number) => {
    console.log(`This is floor number ${floor} `);
  };

  const button4Foo = () => {
    console.log(`Broken floor`);
  };

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
      <br />
      <hr />
      <Other2 />
      <hr />
      <br />
      <Button name={"Floor N10"} callback={() => button1Foo(10, "ten")} />
      <Button name={"Floor N9"} callback={() => button2Foo(9, "nine")} />
      <Button name={"Floor N8"} callback={() => button3Foo(8)} />
      <Button name={"Floor Broken"} callback={button4Foo} />
      <br />
      <hr />
      <StatePractice />
      <br />
      <hr />
      <MethodFilter />
    </div>
  );
}

export default App;
