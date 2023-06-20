import React, { useState } from "react";
import { SomeComponent } from "./SomeComponent";

export type FilterType = "all" | "Rest only RUBLS" | "Rest only Dollars";

export const MethodFilter = () => {
  const [filter, setFilter] = useState<FilterType>("all");
  const [money, setMoney] = useState([
    { banknots: "Dollars", value: 100, number: " a1234567890" },
    { banknots: "Dollars", value: 50, number: " z1234567890" },
    { banknots: "RUBLS", value: 100, number: " w1234567890" },
    { banknots: "Dollars", value: 100, number: " e1234567890" },
    { banknots: "Dollars", value: 50, number: " c1234567890" },
    { banknots: "RUBLS", value: 100, number: " r1234567890" },
    { banknots: "Dollars", value: 50, number: " x1234567890" },
    { banknots: "RUBLS", value: 50, number: " v1234567890" },
  ]);

  let currentMoney = money;

  if (filter === "Rest only RUBLS") {
    currentMoney = money.filter((el) => el.banknots === "RUBLS");
  }

  if (filter === "Rest only Dollars") {
    currentMoney = money.filter((el) => el.banknots === "Dollars");
  }

  const filterMoney = (nameButton: FilterType) => {
    setFilter(nameButton);
  };

  return (
    <SomeComponent
      currentMoney={currentMoney}
      callback={(nameButton) => filterMoney(nameButton)}
    />
  );
};
