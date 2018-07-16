import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

import style from './style';

const Button = ({
  title, long, inverted, disable,
}) => {
  const btnClass = classname(
    'btn',
    { btn__long: long },
    { btn__inverted: inverted },
    { btn__disable: disable },
  );
  return (
    <button type="button" className={btnClass}>
      {title}
      <style jsx>
        {style}
      </style>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  long: PropTypes.bool,
  inverted: PropTypes.bool,
  disable: PropTypes.bool,
};
Button.defaultProps = {
  title: 'Button',
  long: false,
  inverted: false,
  disable: false,
};

export default Button;
