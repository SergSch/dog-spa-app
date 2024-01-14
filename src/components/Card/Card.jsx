import React from 'react';
import classes from './Card.module.css';
const Card = ({ img, alt, descr, title, price }) => {
  return (
    <div>
      <img src={img} alt={alt} className={classes.img} />
      <p className={classes.par}>{descr}</p>
      <p className={classes.par}>{title}</p>

      <h4 className={classes.price}>{price}</h4>
    </div>
  );
};

export default Card;
