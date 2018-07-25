import Service from '../../../components/Service';
import ServiceMobile from '../../../components/ServiceMobile';

import DefaultLayout from '../../../layouts/Default';
import PropTypes from 'prop-types';
import React from 'react';
import windowSize from 'react-window-size';
import style from './style';

const ServicesBlock = ({ servicesData, windowWidth, onClick }) => (
  <div>
    <DefaultLayout title={servicesData.title}>
      <div className="servicesWrapper">
        <div className="servicesWrapper__content">
          {servicesData.servicesArr.map((service, index) => (
            <div className="servicesWrapper__content-inner" key={service.title}>
              {windowWidth < 700 ? (
                <ServiceMobile
                  title={service.title}
                  description={service.description}
                  technologies={service.technologies}
                  image={service.image}
                  isMobileOpen={service.isMobileOpen}
                  onClick={() => onClick(index)}
                />
              ) : (
                <Service
                  title={service.title}
                  description={service.description}
                  technologies={service.technologies}
                  image={service.image}
                />
              )}
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

export default windowSize(ServicesBlock);

ServicesBlock.propTypes = {
  servicesData: PropTypes.shape({
    title: PropTypes.string,
    servicesData: PropTypes.arrayOf(PropTypes.object),
  }),
  windowWidth: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

ServicesBlock.defaultProps = {
  servicesData: {
    title: 'Services we provide',
    servicesData: [{}],
  },
};