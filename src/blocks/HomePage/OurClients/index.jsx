import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

import Cube from '../../../components/Cube';
import DefaultLayout from '../../../layouts/Default';

const OurClient = ({ clientsData }) => (
  <div>
    <DefaultLayout title={clientsData.title}>
      <div className="our-client__wrapper">
        <div className="our-client__content">
          {clientsData.client.map(client => (
            <div key={client.imageColor} className="our-client__cube">
              <Cube
                imageColor={client.imageColor}
                imageBlack={client.imageBlack}
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
