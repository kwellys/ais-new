import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';
import { colors } from 'utils/style-helper';

const Title = ({
  title, sectionHeader, big, inverted, uppercase, noAlign,
}) => {
  const titleClass = classname('b-title', { 'b-title__inverted': inverted });
  return (
    <div className={titleClass}>
      {title}
      <style jsx>
        {`
        .b-title {
          color: ${colors.blue};
          font-family: 'Montserrat';
          font-weight: 600;
          font-size: ${sectionHeader || big ? '30px' : '18px'};
          text-align: ${big || noAlign ? 'initial' : 'center'};
          line-height: normal;
          text-transform: ${sectionHeader || uppercase ? 'uppercase' : 'initial'};
          transition: all .3;
          @media (max-width: 1150px){
            font-size: ${sectionHeader || big ? '22px' : '14px'};
          }
          @media (max-width: 768px){
            font-size: ${sectionHeader || big ? '20px' : '14px'};
          }
            &__inverted {
              color: ${colors.white};
            }
        }
      `}
      </style>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
  sectionHeader: PropTypes.bool,
  inverted: PropTypes.bool,
  big: PropTypes.bool,
  uppercase: PropTypes.bool,
  noAlign: PropTypes.bool,
};
Title.defaultProps = {
  title: 'Title',
  sectionHeader: false,
  inverted: false,
  big: false,
  uppercase: false,
  noAlign: false,
};

export default Title;
