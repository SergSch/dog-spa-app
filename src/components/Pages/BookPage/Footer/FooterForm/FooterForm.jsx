import React from 'react';
import classes from './FooterForm.module.css';
import FooterTitle from '../FooterTitle/FooterTitle';
import Button from '../../../../../UI/Button/Button';

const FooterForm = () => {
  return (
    <div>
      <FooterTitle text={'Subscribe to our Newsletter'} />
      <form className={classes.form}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          className={classes.footer_inp}
        />
        <Button text={'Submit'} width />
      </form>
    </div>
  );
};

export default FooterForm;
