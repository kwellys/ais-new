import Cube from 'components/Cube';

import DefaultLayout from '../../../layouts/Default';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const TechnologiesWeUse = ({ technologiesWeUseData }) => (
  <div>
    <DefaultLayout title={technologiesWeUseData.title}>
      <div className="tech-we-use">
        <div className="tech-we-use__container">
          <div className="tech-we-use__wrapper">
            <div className="tech-we-use__row tech-we-use__row_flex-end">
              <div className="tech-we-use__cube">
                <Cube noRotate isOneImage inverted invisible />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  inverted
                  isOneImage
                  noRotate
                  image={technologiesWeUseData.logoNodeJS}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube noRotate big title="BackEnd" />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  inverted
                  isOneImage
                  noRotate
                  image={technologiesWeUseData.logoHTML}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube noRotate isOneImage inverted invisible />
              </div>
            </div>
            <div className="tech-we-use__row">
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  image={technologiesWeUseData.logoAspNet}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  inverted
                  isOneImage
                  noRotate
                  image={technologiesWeUseData.logoMongo}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube noRotate inverted isOneImage invisible />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  inverted
                  isOneImage
                  noRotate
                  image={technologiesWeUseData.logoReact}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  image={technologiesWeUseData.logoSass}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  image={technologiesWeUseData.logoVue}
                />
              </div>
            </div>
            <div className="tech-we-use__row">
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  image={technologiesWeUseData.logoMySql}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  inverted
                  isOneImage
                  noRotate
                  image={technologiesWeUseData.logoPHP}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube noRotate inverted isOneImage invisible />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  inverted
                  isOneImage
                  noRotate
                  image={technologiesWeUseData.logoAngular}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  image={technologiesWeUseData.logoGit}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube noRotate isOneImage inverted invisible />
              </div>
            </div>
            <div className="tech-we-use__row tech-we-use__row_flex-end">
              <div className="tech-we-use__cube">
                <Cube noRotate isOneImage inverted invisible />
              </div>
              <div className="tech-we-use__cube">
                <Cube inverted isOneImage noRotate invisible />
              </div>
              <div className="tech-we-use__cube">
                <Cube noRotate big title="FrontEnd" />
              </div>
              <div className="tech-we-use__cube">
                <Cube inverted isOneImage noRotate invisible />
              </div>
              <div className="tech-we-use__cube">
                <Cube noRotate isOneImage inverted invisible />
              </div>
              <div className="tech-we-use__cube">
                <Cube noRotate isOneImage inverted invisible />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
    <style jsx>
      {style}
    </style>
  </div>
);

TechnologiesWeUse.propTypes = {
  technologiesWeUseData: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default TechnologiesWeUse;
