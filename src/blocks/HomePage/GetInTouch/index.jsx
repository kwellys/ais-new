import React from 'react';
import PropTypes from 'prop-types';

import style from './style';
import Title from '../../../components/Title';
import Text from '../../../components/Text';
import Button from '../../../components/Button';

const GetInTouch = ({ getInTouchData }) => (
  <div>
    <div className="get-in-touch__wrapper">
      <div className="get-in-touch__container">
        <div className="get-in-touch__description-box">
          <div className="get-in-touch__title">
            <Title inverted big uppercase title={getInTouchData.title} />
          </div>
          <div className="get-in-touch__text">
            <Text inverted alignStart>
              {getInTouchData.description}
            </Text>
          </div>
          <div className="get-in-touch__button">
            <Button long title="Find your solution" />
          </div>

        </div>
        <div className="get-in-touch__image-box">
          <div className="get-in-touch__image-wrapper">
            <img src={getInTouchData.image} alt="get-in-touch" />
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
};

export default GetInTouch;
