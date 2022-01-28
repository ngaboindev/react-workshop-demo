import React from "react";
import PropTypes from "prop-types";

export const GradeButton = ({
  children,
  grade,
  updateGrade,
  additionalClasses,
}) => {
  return (
    <button
      onClick={updateGrade}
      className={`button ${additionalClasses ?? ""}`}
    >
      {children} ({grade})
    </button>
  );
};

// TODO: add react prop types
GradeButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  grade: PropTypes.number.isRequired,
  updateGrade: PropTypes.func.isRequired,
  additionalClasses: PropTypes.string,
};
