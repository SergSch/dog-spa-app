import React from 'react';
import classes from './TrendingPage.module.css';
import { Link } from 'react-router-dom';
import i from './spa_dog.jpg';

import Heading2 from '../../../Heading2/Heading2';
import Button from '../../../../UI/Button/Button';

const TrendingPage = () => {
  return (
    <div className={classes.main}>
      <Heading2 text={'Trending Spa Package'} />
      <div className={classes.main_block}>
        <div className={classes.spa}>
          <img src={i} alt="relax_dog" />
        </div>
        <div className={classes.description}>
          <h3 className={classes.title}>
            Doggy Facial and Fur <br /> Cleanse Treatment <br /> $269
          </h3>
          <p className={classes.paragraph}>
            Dogs receive a facial with our vegan, cruelty free face products and
            cleansing of any dirt left hiding in their beautiful fur <br />{' '}
            (comes with a take home face products and animal treats).
          </p>
          <Link to={'/services'}>
            <Button text={'See More Spa Packages'} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingPage;
