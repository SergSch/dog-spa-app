import React from 'react';
import classes from './HeadScreen.module.css';
import Heading2 from '../../../Heading2/Heading2';
import Button from './../../../../UI/Button/Button';
import { Link } from 'react-router-dom';

const HeadScreen = () => {
  return (
    <div className={classes.head_block}>
      <div className={classes.title_block}>
        <h1 className={classes.title}>Your dog running amok in the dirt?</h1>
        <Heading2
          text={`Book your doggy spa day!`}
          style={{ maxWidth: '445px', marginBottom: '90px' }}
        />

        <Link to={'/book'}>
          <Button text={'Book Appointment'} />
        </Link>
      </div>
    </div>
  );
};

export default HeadScreen;
