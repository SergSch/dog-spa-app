import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import classes from './LoginBlock.module.css';
import Button from '../../../../../UI/Button/Button';

const LoginBlock = () => {
  const [calendarValue, setCalendarValue] = useState(new Date());
  return (
    <form className={classes.form_block}>
      <div className={classes.inputs_block}>
        <input type="text" name="firstName" placeholder="First name" />
        <input type="text" name="lastName" placeholder="Last name" />
      </div>
      <div className={classes.inputs_block}>
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="Phone number" />
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
        />
        <div className={classes.small_pay}>
          <input type="text" name="cardDate" id="" placeholder="Expiry Date" />
          <input type="text" name="cvv" id="" placeholder="CVV" />
        </div>
        <input type="text" name="cardName" id="" placeholder="Name on Card" />

        <div className={classes.payment_methods}>
          <img src="./assets/payments/applePay.svg" alt="applePay" />
          <img src="./assets/payments/google_pay.svg" alt="google_pay" />
          <img src="./assets/payments/visa.svg" alt="visa" />
          <img src="./assets/payments/master_card.svg" alt="master_card" />
          <img src="./assets/payments/amazon.svg" alt="amazon" />
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
