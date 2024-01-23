import React from 'react';
import classes from './DogCollarsPage.module.css';
import Card from '../../../Card/Card';
import Heading2 from '../../../Heading2/Heading2';
import Button from '../../../../UI/Button/Button';
import belt from './../../../../images/cards/belt.jpg';
import diadem from './../../../../images/cards/diadem.jpg';
import neclace from './../../../../images/cards/necklece.png';

const DogCollarsPage = () => {
  const cards = [
    {
      img: belt,
      descr: 'Leather Dog Collars with Gold Name Tag',
      title: 'Luxe Animal Spa',
      price: '$325.00',
    },
    {
      img: diadem,
      descr: 'Pink & White Diamond Encrusted Dog Collar',
      title: 'Luxe Animal Spa',
      price: '$1225.00',
    },
    {
      img: neclace,
      descr: 'Large 3000kt Silver Diamond Collar',
      title: 'Luxe Animal Spa',
      price: '$1500.00',
    },
  ];
  return (
    <div className="container">
      <Heading2 text={'Dog Collars'} />
      <div className={classes.collar_block}>
        {cards.map((elem) => (
          <Card
            key={elem.descr}
            img={elem.img}
            alt={elem.title}
            descr={elem.descr}
            title={elem.title}
            price={`CA ${elem.price}`}
          />
        ))}
      </div>
      <Button text={'See More Dog Collars'} style />
    </div>
  );
};

export default DogCollarsPage;
