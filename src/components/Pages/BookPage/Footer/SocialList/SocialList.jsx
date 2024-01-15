import React from 'react';
import classes from './SocialList.module.css';
import FooterTitle from '../FooterTitle/FooterTitle';

const SocialList = () => {
  const social = [
    {
      img: './assets/sozial/Instagram.svg',
      title: 'Instagram',
    },
    {
      img: './assets/sozial/Facebook.svg',
      title: 'Facebook',
    },
    {
      img: './assets/sozial/Pinterest.svg',
      title: 'Pinterest',
    },
    {
      img: './assets/sozial/Twitter.svg',
      title: 'Twitter',
    },
    {
      img: './assets/sozial/Snapchat.svg',
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
