import React from 'react';
import classes from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div>
      <img
        src="https://miro.medium.com/v2/resize:fit:1358/0*QOZm9X5er1Y0r5-t"
        alt="404"
        className={classes.error}
      />
    </div>
  );
};

export default NotFoundPage;
