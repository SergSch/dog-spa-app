import React from 'react';
import classes from './FirstBookPage.module.css';

const FirstBookPage = () => {
  return (
    <div className={classes.first}>
      <div className={classes.title_block}>
        <h2 className={classes.title}>
          Book An Appointment With Our Groom Specialist Today!
        </h2>
      </div>
    </div>
  );
};

export default FirstBookPage;
