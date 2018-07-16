import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '../../utils/style-helper';

const Text = ({ children, alignStart, inverted }) => (
  <p className="b-text">
    {children}
    <style jsx>
      {`
        .b-text {
          font-family: 'Montserrat';
          line-height: 20px;
          font-size: 16px;
          text-align: ${alignStart ? 'initial' : 'center'};
          color: ${inverted ? colors.white : colors.textColor};
          line-height: 2;
        }
      `}
    </style>
  </p>);
Text.propTypes = {
  children: PropTypes.string.isRequired,
  alignStart: PropTypes.bool,
  inverted: PropTypes.bool,
};

Text.defaultProps = {
  alignStart: false,
  inverted: false,
};
export default Text;
