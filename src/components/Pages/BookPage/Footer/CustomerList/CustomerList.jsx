import React from 'react';
import classes from './CustomerList.module.css';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import FooterTitle from '../FooterTitle/FooterTitle';

const CustomerList = () => {
  const customerServices = [
    {
      title: 'Blog',
      to: '/blog',
    },
    {
      title: 'Cancellations',
      to: '/',
    },
    {
      title: 'Track Your Animal',
      to: '/blog',
    },
    {
      title: 'Luxe’s Annual Spa Day 2024',
      to: '/book',
    },
    {
      title: 'Payment Options',
      to: '/book',
    },
  ];
  return (
    <div className={classes.customerServices_wrap}>
      <FooterTitle text={'Customer Service'} />
      {customerServices.map((elem) => (
        <Link key={elem.title} to={elem.to}>
          <Item text={elem.title} />
        </Link>
      ))}
    </div>
  );
};

export default CustomerList;
