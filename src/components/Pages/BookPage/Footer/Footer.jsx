import React from 'react';
import classes from './Footer.module.css';
import CustomerList from './CustomerList/CustomerList';
import NavigationList from './NavigationList/NavigationList';
import FooterForm from './FooterForm/FooterForm';
import SocialList from './SocialList/SocialList';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.footer_wrap}>
          <CustomerList />
          <div className={classes.footer_middle}>
            <FooterForm />
            <SocialList />
          </div>
          <NavigationList />
        </div>
      </div>
    </div>
  );
};

export default Footer;
