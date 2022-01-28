import React, { useEffect, useState } from "react";
import { GradeButton } from "./GradeButton";

export const Person = () => {
  const [person, setPerson] = useState({
    name: "Laetitia",
    status: "single",
    grade: 0,
  });
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    console.log("mounted");
  }, []);

  useEffect(() => {
    console.log("grade", person.grade);
    console.log("school", schools);
  }, [person, schools]);

  /**
   * Assess the action needed (can be increase or decrease)
   * @param {Boolean} isIncrease
   */
  const updateGrade = (isIncrease = true) => {
    setPerson({
      ...person,
      grade: isIncrease ? person.grade + 1 : person.grade - 1,
    });
  };

  return (
    <div>
      <div>
        <div>Name: {person.name}</div>
        <div>Status: {person.status}</div>
        <div>Grade: {person.grade}</div>
      </div>

      <div>
        <GradeButton updateGrade={() => updateGrade()} grade={person.grade}>
          Increase grade
        </GradeButton>
        <GradeButton
          updateGrade={() => updateGrade(false)}
          grade={person.grade}
        >
          Decrease grade
        </GradeButton>
        {/* <GradeButton
          updateGrade={() =>
            setSchools([...schools, `School ${schools.length + 1}`])
          }
        >
          Add school
        </GradeButton> */}
      </div>
    </div>
  );
};
