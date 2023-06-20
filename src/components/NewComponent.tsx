import React from "react";

type NewComponentType = {
  // students: { id: number; name: string; age: number }[];
  // students: Array<StudentType>;
  students: StudentType[];
  // students: any;
};

type StudentType = {
  id: number;
  name: string;
  age: number;
};

export const NewComponent = ({ students }: NewComponentType) => {
  return (
    <div>
      <h1> New Component</h1>
      {students.map((el, index) => {
        return (
          <li key={el.id}>
            <span>
              name: {el.name} - age:{el.age}{" "}
            </span>
          </li>
        );
      })}
    </div>
  );
};
