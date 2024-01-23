import React from 'react';
import classes from './FooterForm.module.css';
import FooterTitle from '../FooterTitle/FooterTitle';
import Button from '../../../../../UI/Button/Button';
import { useForm } from 'react-hook-form';

const FooterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const submitForm = (data) => {
    console.log(data);
    reset();
  };

  const handelFormError = (error) => {
    console.log('ERROR!', error);
  };

  const registeredEmail = register('email', {
    required: 'Please enter your email!',
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Please enter valid email!',
    },
  });

  return (
    <div>
      <FooterTitle text={'Subscribe to our Newsletter'} />
      <form
        className={classes.form}
        onSubmit={handleSubmit(submitForm, handelFormError)}
      >
        <input
          type="text"
          name="email"
          id=""
          placeholder="Email"
          className={classes.footer_inp}
          {...registeredEmail}
        />

        <Button text={'Submit'} width />
      </form>
      {errors.email && <p className={classes.error}>{errors.email.message}</p>}
    </div>
  );
};

export default FooterForm;
