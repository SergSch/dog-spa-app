import React from 'react';
import classes from './Heading2.module.css';

const Heading2 = ({ text, style }) => {
  return (
    <div style={{ ...style }} className={classes.heading2}>
      {text}
    </div>
  );
};

export default Heading2;
