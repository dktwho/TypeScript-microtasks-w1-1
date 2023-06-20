import React from "react";
import { FilterType } from "./MethodFilter";

type CurrentMoneyType = {
  currentMoney: MoneyType[];
  callback: (nameButton: FilterType) => void;
};
type MoneyType = {
  banknots: string;
  value: number;
  number: string;
};

export const SomeComponent = ({ currentMoney, callback }: CurrentMoneyType) => {
  return (
    <div>
      <ul>
        {currentMoney.map((el, index) => {
          return (
            <li key={index}>
              <span> {el.banknots} </span>
              <span> {el.value} </span>
              <span> {el.number} </span>
            </li>
          );
        })}
        <div style={{ marginLeft: "35px" }}>
          <button onClick={() => callback("all")}>Start money state</button>
          <button onClick={() => callback("Rest only RUBLS")}>
            Rest only RUBLS
          </button>
          <button onClick={() => callback("Rest only Dollars")}>
            Rest only Dollars
          </button>
        </div>
      </ul>
    </div>
  );
};
