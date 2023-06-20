import React from "react";

export const Other2 = () => {
  const onClickHandler = (name: string) => {
    console.log(`Hello im ${name}`);
  };

  

  return (
    <div className="App">
      <button onClick={(event) => onClickHandler("Bob")}>
        My youtube channel 2
      </button>
      <button onClick={(event) => onClickHandler("John")}>
        My youtube channel 3
      </button>
    </div>
  );
};
W
