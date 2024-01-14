import React from 'react';
import classes from './Button.module.css';

const Button = ({ text, style, width }) => {
  return (
    <button
      style={{ marginBottom: style ? '50px' : '', width: width ? '150px' : '' }}
      className={classes.btn}
    >
      {text}
    </button>
  );
};

export default Button;
