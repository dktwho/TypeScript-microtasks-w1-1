import React from "react";

export const Other = () => {
  const foo1 = () => {
    console.log(100200);
  };

  const foo2 = (num: number) => {
    console.log(num);
  };

  return (
    <div>
      <button onClick={foo1}>First Button show: 100200</button>
      <button onClick={(number) => foo2(111333)}>
        Second Button show arg(hardcode) inside func
      </button>
    </div>
  );
};
