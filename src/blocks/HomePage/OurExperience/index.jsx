import Experience from 'components/Experience';
// import Cube from 'components/Cube';
import DefaultLayout from '../../../layouts/Default';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const OurExperience = ({ expirience }) => (
  <div>
    <DefaultLayout title={expirience.title}>
      <div className="our-experience__wrapper">
        {expirience.expirienceArray.map(exp => (
          <Experience key={exp.title} descr={exp} inverted={exp.inverted} />
        ))}
      </div>
    </DefaultLayout>
    <style jsx>
      {style}
    </style>
  </div>
);

OurExperience.propTypes = {
  expirience: PropTypes.shape({
    title: PropTypes.string,
    expirienceArray: PropTypes.arrayOf(PropTypes.object),
  }),
};
OurExperience.defaultProps = {
  expirience: [{}],
};

export default OurExperience;
