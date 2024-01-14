import React from 'react';
import classes from './FooterTitle.module.css';

const FooterTitle = ({ text }) => {
  return <h4 className={classes.footer_title}>{text}</h4>;
};

export default FooterTitle;
