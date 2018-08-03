import PropTypes from 'prop-types';
import React from 'react';

import { colors } from 'utils/style-helper';

const Text = ({
  children, noAlign, inverted, small, lineHeightNormal,
}) => (
  <p className="b-text">
    {children}
    <style jsx>
      {`
        .b-text {
          font-family: 'Montserrat';
          line-height: ${lineHeightNormal ? 'normal': '2'};
          font-size: ${small ? '14px' : '16px'};
          text-align: ${noAlign ? 'initial' : 'center'};
          color: ${inverted ? colors.white : colors.textColor};
          @media (max-width: 1150px){
            font-size: ${small ? '12px' : '12px'};
          }
        }
      `}
    </style>
  </p>
);

Text.propTypes = {
  children: PropTypes.string.isRequired,
  noAlign: PropTypes.bool,
  inverted: PropTypes.bool,
  small: PropTypes.bool,
};
Text.defaultProps = {
  noAlign: false,
  inverted: false,
  small: false,
};

export default Text;
