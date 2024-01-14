import React from 'react';
import classes from './SocialList.module.css';
import FooterTitle from '../FooterTitle/FooterTitle';

const SocialList = () => {
  const img1 = './../../../../../../public/assets/sozial/Instagram.svg';
  const img2 = './assets/sozial/Facebook.svg';
  const img3 = './assets/sozial/Pinterest.svg';
  const img4 = './assets/sozial/Twitter.svg';
  const img5 = './assets/sozial/Snapchat.svg';
  const social = [
    {
      img: './../../../../../../public/assets/sozial/Instagram.svg',
      title: 'instagram',
    },
    {
      img: './assets/sozial/Facebook.svg',
      title: 'facebook',
    },
    {
      img: img3,
      title: 'pintersst',
    },
    {
      img: img4,
      title: 'twitter',
    },
    {
      img: img5,
      title: 'snapchat',
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
