import React from 'react';
import classes from './DogCollarsPage.module.css';
import Card from '../../../Card/Card';
import Heading2 from '../../../Heading2/Heading2';
import Button from '../../../../UI/Button/Button';

const DogCollarsPage = () => {
  const img1 = './assets/cards/belt.jpg';
  const img2 = './assets/cards/diadem.jpg';
  const img3 = './assets/cards/necklece.png';
  const cards = [
    {
      img: img1,
      descr: 'Leather Dog Collars with Gold Name Tag',
      title: 'Luxe Animal Spa',
      price: '$325.00',
    },
    {
      img: img2,
      descr: 'Pink & White Diamond Encrusted Dog Collar',
      title: 'Luxe Animal Spa',
      price: '$1225.00',
    },
    {
      img: img3,
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
