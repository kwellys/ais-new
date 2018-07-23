import Text from 'components/Text';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

import Pointer from '../../assets/img/map_marker.svg'
const Cursor = ({ singleMarker }) => {
  return (
    <div className="cursor">
      <img className="mapMaker" src={Pointer} alt="map maker" />
      <div className="company">
        <div className="company__info">
          <div className="company__info-name">
            <Title title={singleMarker.name} />
          </div>
          <span className="company__info-location">
            <Text>
              {singleMarker.location}
            </Text>
          </span>
          <a className="company__info-link" href={`http://${singleMarker.linkName}`}>
            {singleMarker.linkName}
          </a>
        </div>
        <div className="company__logo">
          <div className="img-wrapper">
            <img src={singleMarker.companyLogo} alt="Company logo" />
          </div>
        </div>
      </div>
      <style jsx>
        {style}
      </style>
      <style jsx>
        {`
        .cursor {
          top: ${singleMarker.coords.y + "%"};left: ${singleMarker.coords.x + "%"};
      }`
        }
      </style>
    </div>
  );
};

export default Cursor;

Cursor.propTypes = {
  singleMarker: PropTypes.objectOf(PropTypes.string),
};

Cursor.defaultProps = {
  singleMarker: {},
};
