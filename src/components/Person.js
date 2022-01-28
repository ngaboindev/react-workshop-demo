import React from "react";
import { GradeButton } from "./GradeButton";

export class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      person: {
        name: "Laetitia",
        status: "single",
        grade: 0,
      },
    };
  }

  // Lifecycle
  componentDidMount() {
    console.log("mounted");
  }
  componentDidUpdate() {
    console.log("grade", this.state.person.grade);
  }

  updateGrade = (action = "increase") => {
    this.setState(({ person }) => ({
      person: {
        ...person,
        grade: action == "increase" ? person.grade + 1 : person.grade - 1,
      },
    }));
  };

  // render
  render() {
    const { person } = this.state;

    return (
      <div>
        <div>
          <div>Name: {person.name}</div>
          <div>Status: {person.status}</div>
          <div>Grade: {person.grade}</div>
        </div>

        <div>
          <GradeButton
            grade={this.state.person.grade}
            updateGrade={() => this.updateGrade()}
          >
            Increase grade
          </GradeButton>
          <GradeButton
            grade={this.state.person.grade}
            updateGrade={() => this.updateGrade("decrease")}
          >
            Decrease grade
          </GradeButton>
        </div>
      </div>
    );
  }
}
