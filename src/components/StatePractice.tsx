import React, { useState } from "react";

export const StatePractice = () => {
  let [a, setA] = useState(1);

  const onClickIncrement = () => {
    setA((prev) => prev + 1);
  };

  const onClickDecrement = () => {
    setA((prev) => prev - 1);
  };

  const onClickHandlerZero = () => {
    setA(0);
  };

  return (
    <div>
      <h1>{a}</h1>
      <button onClick={onClickIncrement}>Increment</button>
      <button onClick={onClickDecrement}>Decrement</button>
      <button onClick={onClickHandlerZero}>0</button>
    </div>
  );
};
