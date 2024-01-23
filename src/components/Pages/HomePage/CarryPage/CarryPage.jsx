import React from 'react';
import classes from './CarryPage.module.css';
import Card from '../../../Card/Card';
import Heading2 from '../../../Heading2/Heading2';
import Button from '../../../../UI/Button/Button';
import dogBag from '../../../../images/cards/dog_bag.jpg'
import redCat from '../../../../images/cards/redCat_bag.jpg'
import blondCat from '../../../../images/cards/blondCatBag.jpg'

const CarryPage = () => {
  

  const cards = [
    {
      img: dogBag,
      descr: 'Leather Dog Collars with Gold Name Tag',
      title: 'Luxe Animal Spa',
      price: '$125.00',
    },
    {
      img: redCat,
      descr: 'Pink & White Diamond Encrusted Dog Collar',
      title: 'Luxe Animal Spa',
      price: '$135.00',
    },
    {
      img: blondCat,
      descr: 'Large 3000kt Silver Diamond Collar',
      title: 'Luxe Animal Spa',
      price: '$95.00',
    },
  ];
  return (
    <div className="container">
      <Heading2 text={'Animal Carry Ons'} />
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
      <Button text={'See More Carry Ons'} style />
    </div>
  );
};

export default CarryPage;
