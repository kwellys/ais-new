import React from 'react';
import style from './style';

const TopHomePage = () => (
  <div>
    <div className="home-page">
      <div className="home-page__content">
        <div className="home-page__title">
          <h1>
            For the beautiful web
          </h1>
        </div>
        <div className="home-page__description">
          <h1>
            We are a team of professionals dedicated to creating fast, beautiful
            and reliable web applications
          </h1>
        </div>
      </div>
    </div>
    <style jsx>
      {style}
    </style>
  </div>
);

export default TopHomePage;
