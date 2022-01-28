import React from "react";

export class GradeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, grade, updateGrade } = this.props;

    // return <button onClick={() => this.updateGrade()}>Increase grade</button>;
    return (
      <button
        onClick={updateGrade}
        className={`button ${additionalClasses ?? ""}`}
      >
        {children} ({grade})
      </button>
    );
  }
}

// TODO: add react prop types
