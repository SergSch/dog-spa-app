import React, { useState } from 'react';
import classes from './LoginPage.module.css';
import LoginBlock from './LoginBlock/LoginBlock';
import MapBlock from './MapBlock/MapBlock';

const LoginPage = () => {
  return (
    <div className="container">
      <h3>Enter your information here</h3>
      <div className={classes.main_block}>
        <LoginBlock />
        <MapBlock />
      </div>
    </div>
  );
};

export default LoginPage;
