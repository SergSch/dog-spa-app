import React from 'react';
import FirstBookPage from './FirstBookPage/FirstBookPage';
import LoginPage from './LoginPage/LoginPage';
import Footer from './Footer/Footer';
import FooterBottom from './FooterBottom/FooterBottom';

const BookPage = () => {
  return (
    <div>
      <FirstBookPage />
      <LoginPage />
      <Footer />
      <FooterBottom />
    </div>
  );
};

export default BookPage;
