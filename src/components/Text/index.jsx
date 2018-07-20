import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils/style-helper';

const Text = ({
  children, noAlign, inverted, small,
}) => (
  <p className="b-text">
    {children}
    <style jsx>
      {`
        .b-text {
          font-family: 'Montserrat';
          line-height: 20px;
          font-size: ${small ? '14px' : '16px'};
          text-align: ${noAlign ? 'initial' : 'center'};
          color: ${inverted ? colors.white : colors.textColor};
          line-height: 2;
          @media (max-width: 1150px){
            font-size: ${small ? '12px' : '12px'};
          }
        }
      `}
    </style>
  </p>);
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
