import React from 'react';
import classes from './SocialList.module.css';
import FooterTitle from '../FooterTitle/FooterTitle';
import insta from './../../../../../images/sozial/Instagram.svg';
import facebook from './../../../../../images/sozial/Facebook.svg';
import pinterest from './../../../../../images/sozial/Pinterest.svg';
import twitter from './../../../../../images/sozial/Twitter.svg';
import snapchat from './../../../../../images/sozial/Snapchat.svg';

const SocialList = () => {
  const social = [
    {
      img: insta,
      title: 'Instagram',
    },
    {
      img: facebook,
      title: 'Facebook',
    },
    {
      img: pinterest,
      title: 'Pinterest',
    },
    {
      img: twitter,
      title: 'Twitter',
    },
    {
      img: snapchat,
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
