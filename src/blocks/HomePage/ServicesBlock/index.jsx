import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

import DefaultLayout from '../../../layouts/Default';

import Service from '../../../components/Service';

const ServicesBlock = ({ servicesData }) => (
  <div>
    <DefaultLayout title={servicesData.title}>
      <div className="servicesWrapper">
        <div className="servicesWrapper__content">
          {servicesData.servicesArr.map(service => (
            <div className="servicesWrapper__content-inner" key={service.title}>
              <Service
                title={service.title}
                description={service.description}
                technologies={service.technologies}
                image={service.image}
              />
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

export default ServicesBlock;

ServicesBlock.propTypes = {
  servicesData: PropTypes.shape({
    title: PropTypes.string,
    servicesData: PropTypes.arrayOf(PropTypes.object),
  }),
};

ServicesBlock.defaultProps = {
  servicesData: {
    title: 'Services we provide',
    servicesData: [{}],
  },
};
