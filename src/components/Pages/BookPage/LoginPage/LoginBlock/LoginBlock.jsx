import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import classes from './LoginBlock.module.css';
import Button from '../../../../../UI/Button/Button';
import { useForm } from 'react-hook-form';
import apple from './../../../../../images/payments/applePay.svg';
import google from './../../../../../images/payments/google_pay.svg';
import visa from './../../../../../images/payments/visa.svg';
import masterCard from './../../../../../images/payments/master_card.svg';
import amazon from './../../../../../images/payments/amazon.svg';

const LoginBlock = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [calendarValue, setCalendarValue] = useState(new Date());

  const handelFormError = () => {
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data), handelFormError)}
      className={classes.form_block}
    >
      <div className={classes.inputs_block}>
        <input
          className={classes.firstInput}
          type="text"
          name="firstName"
          placeholder="First name"
          {...register('firstName', { required: 'Please enter your name!' })}
        />
        {errors.firstName && (
          <p className={classes.error}>{errors.firstName.message}</p>
        )}
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          {...register('lastName', { required: 'Please enter your lastname!' })}
        />
        {errors.lastName && (
          <p className={classes.error2}>{errors.lastName.message}</p>
        )}
      </div>
      <div className={classes.inputs_block}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          {...register('email', { required: 'Please enter your email!' })}
        />
        {errors.email && (
          <p className={classes.error3}>{errors.email.message}</p>
        )}
        <input
          type="text"
          name="phone"
          placeholder="Phone number"
          {...register('phone', { required: 'Please enter your phone!' })}
        />
        {errors.phone && (
          <p className={classes.error2}>{errors.phone.message}</p>
        )}
      </div>
      <div className={classes.date_block}>
        <div className={classes.time_block}>
          <h4>Choose a timeslot on Dec. 11th, 2024:</h4>
          <label htmlFor="first">
            <input type="checkbox" name="" id="first" class="custom-checkbox" />
            11 am - 12 pm
          </label>
          <label htmlFor="second">
            <input type="checkbox" name="" id="second" />
            12 pm - 1 pm
          </label>
          <label htmlFor="third">
            <input type="checkbox" name="" id="third" />1 pm - 2 pm
          </label>
          <label htmlFor="fourth">
            <input type="checkbox" name="" id="fourth" />3 pm - 4 pm
          </label>
          <label htmlFor="fifth">
            <input type="checkbox" name="" id="fifth" />4 pm - 5pm
          </label>
        </div>
        <div>
          <Calendar
            onChange={setCalendarValue}
            value={calendarValue}
            className={classes.calendar}
            locale="en-US"
          />
        </div>
      </div>
      <textarea
        name=""
        id=""
        cols="30"
        rows="3"
        placeholder="Any special requests for your pet(s)..."
      ></textarea>
      <div className={classes.payment}>
        <h4 className={classes.payment_title}>
          Enter your payment information
        </h4>
        <input
          type="text"
          name="numberCard"
          id=""
          placeholder="Credit Card Number"
          {...register('numberCard', {
            required: 'Please enter your Card Number!',
            minLength: {
              value: 6,
              message: 'Card Number should be 6 sign at least',
            },
            maxLength: {
              value: 12,
              message: 'Card Number to long',
            },
          })}
        />
        {errors.numberCard && (
          <p className={classes.errorPay}>{errors.numberCard.message}</p>
        )}
        <div className={classes.small_pay}>
          <input
            type="text"
            name="cardDate"
            id=""
            placeholder="Expiry Date"
            {...register('cardDate', {
              required: 'Please enter Expiry Date!',
              minLength: {
                value: 6,
                message: 'Date should be 6 sign at least',
              },
              maxLength: {
                value: 8,
                message: 'To long',
              },
            })}
          />
          {errors.cardDate && (
            <p className={classes.errorPay}>{errors.cardDate.message}</p>
          )}
          <input
            type="text"
            name="cvv"
            id=""
            placeholder="CVV"
            {...register('cvv', {
              required: 'Please enter CVV!',
              minLength: {
                value: 4,
                message: 'Date should be 4 sign at least',
              },
              maxLength: {
                value: 6,
                message: 'To long',
              },
            })}
          />
          {errors.cvv && (
            <p className={classes.errorPay}>{errors.cvv.message}</p>
          )}
        </div>
        <input
          type="text"
          name="cardName"
          id=""
          placeholder="Name on Card"
          {...register('cardName', {
            required: 'Please enter card name!',
            minLength: {
              value: 2,
              message: 'Date should be 6 sign at least',
            },
            maxLength: {
              value: 20,
              message: 'To long',
            },
          })}
        />
        {errors.cardName && (
          <p className={classes.errorPay}>{errors.cardName.message}</p>
        )}

        <div className={classes.payment_methods}>
          <img src={apple} alt="applePay" />
          <img src={google} alt="google_pay" />
          <img src={visa} alt="visa" />
          <img src={masterCard} alt="master_card" />
          <img src={amazon} alt="amazon" />
        </div>
        <p className={classes.payment_paragraph}>
          Please be advised cancelling within 24 hours of your scheduled
          appointment will result in a cancellation fee of $300.00.
        </p>
      </div>
      <Button text={'Book Appointment'} />
    </form>
  );
};

export default LoginBlock;
