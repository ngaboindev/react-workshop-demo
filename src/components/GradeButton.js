import React from "react";

export class GradeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { children, grade, updateGrade } = this.props;

    // return <button onClick={() => this.updateGrade()}>Increase grade</button>;
    return (
      <button onClick={updateGrade}>
        {children} ({grade})
      </button>
    );
  }
}

// TODO: add react prop types
