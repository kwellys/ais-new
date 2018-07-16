import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import DefaultComponent from '../../../layouts/Default';

const Latest = ({ latest }) => (
  <div>
    <DefaultComponent title={latest.title}>
      <div className="l-wrapper">
        <div className="l-wrapper__container">
          <div className="l-wrapper__container-left">
            <img src={latest.image1} alt="ShowProject" />
            <div className="overlayer">
              <div className="overlayer__title">
                {latest.title2}
              </div>
              <a className="overlayer__link" href={latest.link2}>
                {latest.link2Title}
              </a>
            </div>
          </div>
          <div className="l-wrapper__container-right">
            <div className="l-wrapper__container-right-upper">
              <img src={latest.image2} alt="ShowProject" />
              <div className="overlayer">
                <div className="overlayer__title">
                  {latest.title2}
                </div>
                <a className="overlayer__link" href={latest.link2}>
                  {latest.link2Title}
                </a>
              </div>
            </div>
            <div className="l-wrapper__container-right-bottom">
              <div className="i1">
                <img src={latest.image3} alt="ShowProject" />
                <div className="overlayer">
                  <div className="overlayer__title">
                    {latest.title2}
                  </div>
                  <a className="overlayer__link" href={latest.link2}>
                    {latest.link2Title}
                  </a>
                </div>
              </div>
              <div className="i2">
                <img src={latest.image4} alt="ShowProject" />
                <div className="overlayer">
                  <div className="overlayer__title">
                    {latest.title2}
                  </div>
                  <a className="overlayer__link" href={latest.link2}>
                    {latest.link2Title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultComponent>
    <style jsx>
      {style}
    </style>
  </div>
);

export default Latest;

Latest.propTypes = {
  latest: PropTypes.shape(PropTypes.objest),
};

Latest.defaultProps = {
  latest: {},
};
