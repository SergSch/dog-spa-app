import React from 'react';
import classes from './FooterBottom.module.css';

const FooterBottom = () => {
  const date = new Date().getFullYear();
  return (
    <div className={classes.wrap}>
      <div>
        <a href="#!">Cookie Policy</a>
        <a href="#!">Cookies Settings</a>
      </div>
      <p>{`Copyright ${date} Luxe Animal Spa, LLC. All rights reserved.`}</p>
      <div>
        <a href="#!">Terms</a>
        <a href="#!">Privacy</a>
        <a href="#!">Security</a>
      </div>
    </div>
  );
};

export default FooterBottom;
