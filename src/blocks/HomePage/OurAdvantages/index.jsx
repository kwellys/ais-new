import AdvantachesCard from 'components/AdvantachesCard';

import DefaultLayout from '../../../layouts/Default';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const OurExperience = ({ ourAdvantachesData }) => (
  <div>
    <DefaultLayout title={ourAdvantachesData.title}>
      <div className="our-arvantaches__wrapper">
        <div className="our-arvantaches__container">
          {ourAdvantachesData.ourAdvantacheArray.map(adv => (
            <div key={adv.title} className="our-arvantaches__card">
              <AdvantachesCard image={adv.image} text={adv.text} title={adv.title} />
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
    <style jsx>
      {style}
    </style>
  </div>
);

OurExperience.propTypes = {
  ourAdvantachesData: PropTypes.shape({
    title: PropTypes.string,
    ourAdvantacheArray: PropTypes.arrayOf(PropTypes.object),
  }),
};
OurExperience.defaultProps = {
  ourAdvantachesData: [{}],
};

export default OurExperience;
