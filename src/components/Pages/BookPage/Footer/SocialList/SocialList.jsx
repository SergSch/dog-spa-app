import React from 'react';
import classes from './SocialList.module.css';
import FooterTitle from '../FooterTitle/FooterTitle';
// ./assets/payments/applePay.svg
const SocialList = () => {
  const social = [
    {
      img: './assets/payments/google_pay.svg',
      title: 'Instagram',
    },
    {
      img: './assets/payments/facebook.svg',
      title: 'Facebook',
    },
    {
      img: './assets/payments/applePay.svg',
      title: 'Pinterest',
    },
    {
      img: './assets/sozial/twitter.svg',
      title: 'Twitter',
    },
    {
      img: './assets/sozial/snapchat.svg',
      title: 'Snapchat',
    },
  ];

  return (
    <div className={classes.wrap}>
      <FooterTitle text={'Connect With Us On Social Media'} />
      <div className={classes.social_wrap}>
        {social.map((elem) => (
          <img key={elem.title} src={elem.img} alt={elem.title} />
        ))}
      </div>
    </div>
  );
};

export default SocialList;
