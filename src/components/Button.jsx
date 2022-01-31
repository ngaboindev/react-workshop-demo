import React from 'react';
import classes from './button.module.css';

const Button = ({ children }) => {
  return (
    <button className={classes.btn + ' ' + classes.danger}>{children}</button>
  );
};

export default Button;
