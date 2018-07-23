import Card from '../../../components/Card';
import PropTypes from 'prop-types';
import React from 'react';
import Swiper from 'react-slider-swiper';

import style from './style';

const TopCards = ({ cards }) => {
  const settings = {
    breakpoints: {
      1150: {
        centeredSlides: false,
        slidesPerView: 3,
        spaceBetween: 40,
      },
      680: {
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
    centeredSlides: false,
    containerModifierClass: 'swiper-container-cards-',
    followFinger: false,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: 3,
    spaceBetween: 68,
  };
  return (
    <div className="home-cards__wrapper">
      <div className="home-cards">
        <div className="home-cards__content">
          <Swiper {...settings}>
            {cards.map(card => (
              <div className="swiper-slide" key={card.title}>
                <Card
                  image={card.image}
                  title={card.title}
                  text={card.text}
                />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx>
        {style}
      </style>
    </div>
  );
};

TopCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
};
TopCards.defaultProps = {
  cards: [],
};

export default TopCards;
