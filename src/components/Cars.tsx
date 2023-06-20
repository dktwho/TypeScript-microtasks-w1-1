import React from "react";

type CarsType = {
  cars: CarDescription[];
};

type CarDescription = {
  manufacturer: string;
  model: string;
};

export const Cars = ({ cars }: CarsType) => {
  return (
    <div>
      <h1>Cars</h1>
      <table>
        {cars.map((el, index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>manufacturer</th>
                <th>model</th>
              </tr>
              <tr>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
