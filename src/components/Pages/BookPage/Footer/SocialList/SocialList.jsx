import React from 'react';
import classes from './SocialList.module.css';
import FooterTitle from '../FooterTitle/FooterTitle';

const SocialList = () => {
  const social = [
    {
      img: './assets/sozial/instagram.svg',
      title: 'Instagram',
    },
    {
      img: './assets/sozial/facebook.svg',
      title: 'Facebook',
    },
    {
      img: './assets/sozial/pinterest.svg',
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
