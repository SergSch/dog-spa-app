import React from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <div className={classes.header}>
        <>
          <img src="./assets/Logo.svg" alt="Logo" />
        </>

        <nav>
          <Link to={'/'}>
            <p>Home</p>
          </Link>
          <Link to={'/products'}>
            <p>Products</p>
          </Link>
          <Link to={'/services'}>
            <p>Spa Services</p>
          </Link>
          <Link to={'/book'}>
            <p>Book Appointment</p>
          </Link>
          <Link to={'/blog'}>
            <p>Blog</p>
          </Link>
          <Link to={'/about'}>
            <p>About Us</p>
          </Link>
          <Link to={'/contact'}>
            <p>Contact Us</p>
          </Link>
        </nav>

        <div className={classes.header_img}>
          <img src="./assets/icons/search.svg" alt="search" />
          <div className={classes.cart}>
            <img src="./assets/icons/shopping-bag.svg" alt="bag" />
          </div>
          <img src="./assets/icons/user.svg" alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
