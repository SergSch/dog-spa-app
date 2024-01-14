import React from 'react';
import classes from './MapBlock.module.css';

const MapBlock = () => {
  return (
    <div className={classes.map_block}>
      <div className={classes.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191973.47648054865!2d174.58944845381222!3d-41.25258450933932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b1fc49e974cb%3A0xa00ef63a213b470!2z0JLQtdC70LvQuNC90LPRgtC-0L0sINCd0L7QstCw0Y8g0JfQtdC70LDQvdC00LjRjw!5e0!3m2!1sru!2sde!4v1705226017258!5m2!1sru!2sde"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={classes.text_block}>
        <div className={classes.first_block}>
          <h5>Our Address:</h5>
          <p>Luxe Animal Spa 80 Smithe St Vancouver, BC V6B 1M7</p>
        </div>
        <div className={classes.second_block}>
          <h5>Hours of Operation:</h5>
          <p>
            Sunday - Closed <br /> Monday 10 a.m.-5:30 p.m. <br /> Tuesday 10
            a.m.-5:30 p.m. <br />
            Wednesday 10 a.m.-5:30 p.m. <br /> Thursday 10 a.m.-5:30 p.m. <br />{' '}
            Friday 10 a.m.-5:30 p.m. <br /> Saturday 10 a.m.-5:30 p.m.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MapBlock;
