import React from 'react';
import classes from './NavigationList.module.css';
import FooterTitle from '../FooterTitle/FooterTitle';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';

const NavigationList = () => {
  const customerServices = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'About Us',
      to: '/about',
    },
    {
      title: 'Contact Us',
      to: '/contact',
    },
    {
      title: 'FAQs',
      to: '/',
    },
    {
      title: 'Help with navigation',
      to: '/',
    },
  ];
  return (
    <div className={classes.navigation_wrap}>
      <FooterTitle text={'Navigation'} />
      {customerServices.map((elem) => (
        <Link key={elem.title} to={elem.to}>
          <Item text={elem.title} />
        </Link>
      ))}
    </div>
  );
};

export default NavigationList;
