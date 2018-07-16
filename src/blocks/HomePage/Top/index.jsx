import React, {Fragment} from 'react';
import style from './style';

const TopHomePage = ({title, description}) => (
  <Fragment>
    <div className="home-page">
      <div className="home-page__content">
        <div className="home-page__title">
          <h1>
            {title}
          </h1>
        </div>
        <div className="home-page__description">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
    <style jsx>
      {style}
    </style>
  </Fragment>
);

export default TopHomePage;
