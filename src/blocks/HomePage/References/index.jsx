import Text from '../../../components/Text';
import Title from '../../../components/Title';

import DefaultLayout from 'layouts/Default';
import PropTypes from 'prop-types';
import React from 'react';
import Swiper from 'react-slider-swiper';
import leftBg from '../../../assets/img/slider_bg1.svg';
import rightBg from '../../../assets/img/slider_bg2.svg';

import style, { card } from './style';

const SliderCard = ({ slide }) => {
  const {
    title, image, description, text,
  } = slide;
  return (
    <div className="b-card">
      <div className="b-card__container">
        <div className="b-card__header">
          <div className="b-card__image-box">
            <img src={image} alt="avatar" style={{ width: '100%' }} />
          </div>
          <div className="b-card__descr-box">
            <div className="b-card__title">
              <Title title={title} noAlign />
            </div>
            <div className="b-card__descr">
              <Text small noAlign>
                {description}
              </Text>
            </div>
          </div>
        </div>
        <div className="b-card__text">
          <Text small noAlign>
            {text}
          </Text>
        </div>
      </div>
      <style jsx>
        {card}
      </style>
    </div>
  );
};

SliderCard.propTypes = {
  slide: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

const settings = {
  nextButton: '.swiper-button-next.swiper-button-next-ref',
  prevButton: '.swiper-button-prev.swiper-button-prev-ref',
};
const References = ({ referencesData }) => (
  <div>
    <DefaultLayout title={referencesData.title}>
      <div className="references">
        <div className="references__cube references__cube_left">
          <img src={leftBg} alt="left cube" style={{ width: '100%' }} />
        </div>
        <div className="references__cube references__cube_right">
          <img src={rightBg} alt="right cube" style={{ width: '100%' }} />
        </div>
        <div className="references__container">
          <Swiper {...settings}>
            {referencesData.slides.map(slide => (
              <div className="swiper-slide" key={slide.title}>
                <SliderCard slide={slide} />
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

References.propTypes = {
  referencesData: PropTypes.shape({
    title: PropTypes.string,
    ourAdvantacheArray: PropTypes.arrayOf(PropTypes.object),
  }),
};
References.defaultProps = {
  referencesData: {
    title: 'Need title',
    slides: [],
  },
};

export default References;
