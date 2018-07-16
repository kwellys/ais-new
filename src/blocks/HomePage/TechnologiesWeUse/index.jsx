import React from 'react';
import PropTypes from 'prop-types';

import style from './style';

import DefaultLayout from '../../../layouts/Default';
import Cube from '../../../components/Cube';

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
                  imageColor={technologiesWeUseData.logoNodeJS}
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
                  imageColor={technologiesWeUseData.logoHTML}
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
                  imageColor={technologiesWeUseData.logoAspNet}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  inverted
                  isOneImage
                  noRotate
                  imageColor={technologiesWeUseData.logoMongo}
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
                  imageColor={technologiesWeUseData.logoReact}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  imageColor={technologiesWeUseData.logoSass}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  imageColor={technologiesWeUseData.logoVue}
                />
              </div>
            </div>
            <div className="tech-we-use__row">
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  imageColor={technologiesWeUseData.logoMySql}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  inverted
                  isOneImage
                  noRotate
                  imageColor={technologiesWeUseData.logoPHP}
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
                  imageColor={technologiesWeUseData.logoAngular}
                />
              </div>
              <div className="tech-we-use__cube">
                <Cube
                  noRotate
                  isOneImage
                  inverted
                  imageColor={technologiesWeUseData.logoGit}
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
