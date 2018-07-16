import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import DefaultComponent from '../../../layouts/Default';
import PersonalCard from '../../../components/PersonalCard';

const MemberCard = ({ personalCards }) => (
  <div>
    <DefaultComponent title={personalCards.title}>
      <div className="members">
        {personalCards.personalDetails.map(detail => (
          <PersonalCard key={detail.title} title={detail.title} image={detail.image} role={detail.role} />
        ))}
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
