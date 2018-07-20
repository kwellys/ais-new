import classname from 'classname';
import PropTypes from 'prop-types';
import React from 'react';

import style from './style';

const Button = ({
  title, type, long, inverted, disable,
  scrollStatus, loading, success, error,
  ...rest
}) => {
  const renderMessage = () => {
    if (loading) {
      return (
        <div className="btn__message-box">
          <div className="btn__message">
            sending
          </div>
          <div className="btn__dots">
            <div className="btn__dot" />
            <div className="btn__dot" />
            <div className="btn__dot" />
          </div>
          <style jsx>
            {style}
          </style>
        </div>
      );
    }

    if (success) {
      return (
        <div className="btn__message-box">
          <div className="btn__message btn__message_success">
            Successfully
          </div>
          <div className="btn__success-icon" />
          <style jsx>
            {style}
          </style>
        </div>
      );
    }

    if (error) {
      return (
        <div className="btn__message-box">
          <div className="btn__message btn__message_error">
            oops, try again
          </div>
          <div className="btn__error-icon" />
          <style jsx>
            {style}
          </style>
        </div>
      );
    }
    return (title);
  };

  const btnClass = classname(
    'btn',
    { btn__long: long },
    { btn__inverted: inverted },
    { btn__disable: disable },
    { scrolled: scrollStatus },
  );
  return (
    <button type={type} className={btnClass} {...rest}>
      {renderMessage()}
      <style jsx>
        {style}
      </style>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf([
    'button', 'submit',
  ]),
  long: PropTypes.bool,
  inverted: PropTypes.bool,
  disable: PropTypes.bool,
  scrollStatus: PropTypes.bool,
  loading: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
};
Button.defaultProps = {
  title: 'Button',
  type: 'button',
  long: false,
  inverted: false,
  disable: false,
  loading: false,
  success: false,
  error: false,
  scrollStatus: false,
};

export default Button;
