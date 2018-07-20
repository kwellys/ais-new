import Galuza from 'assets/img/Galuza.png';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const PersonalCard = ({ image, title, role }) => (
  <div className="personal">
    <div className="personal__container">
      <div className="personal__container-square" />
      <div className="personal__container-photo">
        <img src={image} className="personal__container-image" alt="Personal Card Info" />
      </div>
      <div className="personal__container-info">
        {title}
      </div>
      <div className="personal__container-role">
        {role}
      </div>
    </div>
    <style jsx>
      {style}
    </style>
  </div>
);
PersonalCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  role: PropTypes.string,
};
PersonalCard.defaultProps = {
  image: Galuza,
  title: 'Sergey Galuza',
  role: 'Founder',
};

export default PersonalCard;
