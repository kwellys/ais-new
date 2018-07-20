import Button from 'components/Button';
import Text from 'components/Text';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const GetInTouch = ({ getInTouchData, onClick }) => (
  <div>
    <div className="get-in-touch__wrapper">
      <div className="get-in-touch__container">
        <div className="get-in-touch__description-box">
          <div className="get-in-touch__title">
            <Title inverted big uppercase title={getInTouchData.title} />
          </div>
          <div className="get-in-touch__text">
            <Text inverted noAlign>
              {getInTouchData.description}
            </Text>
          </div>
          <div className="get-in-touch__button">
            <Button long title="Find your solution" onClick={onClick} />
          </div>
        </div>
        <div className="get-in-touch__image-box">
          <div className="get-in-touch__image-wrapper">
            <img src={getInTouchData.image} alt="get-in-touch" className="get-in-touch__image-item" />
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {style}
    </style>
  </div>
);

GetInTouch.propTypes = {
  getInTouchData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GetInTouch;
