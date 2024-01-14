import React from 'react';
import classes from './Item.module.css';

const Item = ({ text }) => {
  return <p className={classes.item}>{text}</p>;
};

export default Item;
