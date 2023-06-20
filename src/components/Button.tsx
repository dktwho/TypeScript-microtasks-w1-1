import React from "react";

type PropsButtonName = {
  name: string;
  callback: () => void;
};

export const Button = ({ name, callback }: PropsButtonName) => {
  const onClickHandler = () => {
    callback();
  };
  return (
    <div>
      <button onClick={onClickHandler}>{name}</button>
    </div>
  );
};
