import PersonalCard from '../../../components/PersonalCard';
import DefaultComponent from '../../../layouts/Default';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const MemberCard = ({ personalCards }) => (
  <div>
    <DefaultComponent title={personalCards.title}>
      <div className="members">
        <div className="members__wrapper">
          {personalCards.personalDetails.map(detail => (
            <PersonalCard key={detail.title} title={detail.title} image={detail.image} role={detail.role}/>
          ))}
        </div>
      </div>
    </DefaultComponent>
    <style jsx>
      {style}
    </style>
  </div>
);

export default MemberCard;

MemberCard.propTypes = {
  personalCards: PropTypes.shape({
    title: PropTypes.string,
    personalDetails: PropTypes.arrayOf(PropTypes.object),
  }),
};

MemberCard.defaultProps = {
  personalCards: [{}],
};
