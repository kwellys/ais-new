import Cube from 'components/Cube';
import DefaultLayout from '../../../layouts/Default';
import PropTypes from 'prop-types';
import React from 'react';
import Swiper from 'react-slider-swiper';

import style from './style';

const settings = {
  slidesPerView: 5,
  containerModifierClass: 'swiper-container-cubs-',
  followFinger: false,
  allowTouchMove: false,
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    650: {
      followFinger: true,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    380: {
      followFinger: true,
      slidesPerView: 2,
    },
  },
};

const OurClient = ({ clientsData }) => (
  <div>
    <DefaultLayout title={clientsData.title}>
      <div className="our-client__wrapper">
        <div className="our-client__content">
          <Swiper {...settings}>
            {clientsData.client.map(client => (
              <div key={client.image} className="our-client__cube">
                <Cube image={client.image} darkened highlight />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </DefaultLayout>
    <style jsx>
      {style}
    </style>
  </div>
);

OurClient.propTypes = {
  clientsData: PropTypes.shape({
    title: PropTypes.string,
    client: PropTypes.arrayOf(PropTypes.object),
  }),
};
OurClient.defaultProps = {
  clientsData: {
    client: [{}],
    title: 'Our client',
  },
};

export default OurClient;
