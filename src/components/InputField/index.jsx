import UploadIcon from '../../assets/img/upload.svg';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

import {
  ErrorStyle, FieldStyle, UploadStyle, ViewStyle,
} from './style';

const InputError = ({ invalid, text }) => {
  if (invalid) {
    return (
      <div className="input-error">
        <span>
          {text}
        </span>
        <style jsx>
          {ErrorStyle}
        </style>
      </div>
    );
  }

  return null;
};

InputError.propTypes = {
  invalid: PropTypes.bool,
  text: PropTypes.string,
};
InputError.defaultProps = {
  invalid: false,
  text: '',
};

const UploadLabel = ({ name }) => {
  if (name != null) {
    return (
      <div className="label-upload">
        <label className="label-upload__button" htmlFor={name}>
          <img src={UploadIcon} alt={name} />
        </label>
        <style jsx>
          {UploadStyle}
        </style>
      </div>
    );
  }

  return null;
};

UploadLabel.propTypes = {
  name: PropTypes.string,
};
UploadLabel.defaultProps = {
  name: null,
};

class InputView extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }


  onChange(event) {
    let invalid = false;

    switch (event.target.type) {
      case 'email': {
        invalid = !isEmail(event.target.value);

        break;
      }
      case 'number': {
        invalid = event.target.value.length < 7;

        break;
      }
      default: {
        const { error } = this.props;

        if (error != null) {
          invalid = isEmpty(event.target.value);
        }
      }
    }


    const { change } = this.props;

    change({ invalid, value: event.target.value });
  }

  render() {
    const {
      error, name, placeholder, type, upload, invalid,
    } = this.props;

    if (type === 'textarea') {
      return (
        <div className="input-view">
          <textarea
            className={`input-view__field input-view__textarea ${
              invalid ? 'input-view__field-invalid' : ''
              }`}
            id={name}
            name={name}
            placeholder={placeholder}
            rows="5"
            onChange={this.onChange}
          />
          <InputError invalid={invalid} text={error} />
          <UploadLabel name={upload} />
          <style jsx>
            {ViewStyle}
          </style>
        </div>
      );
    }

    return (
      <div className="input-view">
        <input
          className={`input-view__field input-view__input ${
            invalid ? 'input-view__field-invalid' : ''
            }`}
          id={name}
          name={name}
          placeholder={placeholder}
          type={type}
          onChange={this.onChange}
        />
        {error !== '' && <InputError invalid={invalid} text={error} />}
        <UploadLabel name={upload} />
        <style jsx>
          {ViewStyle}
        </style>
      </div>
    );
  }
}

InputView.propTypes = {
  change: PropTypes.func,
  error: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'text', 'textarea', 'number']),
  upload: PropTypes.string,
  invalid: PropTypes.bool,
};
InputView.defaultProps = {
  change: null,
  error: '',
  name: '',
  placeholder: '',
  type: 'text',
  upload: null,
  invalid: false,
};

const InputField = ({
                      change,
                      error,
                      label,
                      name,
                      placeholder,
                      type,
                      upload,
                      invalid,
                    }) => (
  <div className="input-field">
    <label className="input-field__label" htmlFor={name}>
      {label}
      {/* {console.log(invalid)} */}
    </label>
    <InputView
      change={change}
      error={error}
      name={name}
      placeholder={placeholder}
      type={type}
      upload={upload}
      invalid={invalid}
    />
    <style jsx>
      {FieldStyle}
    </style>
  </div>
);

InputField.propTypes = {
  change: PropTypes.func,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'text', 'textarea', 'number']),
  upload: PropTypes.string,
  invalid: PropTypes.bool,
};
InputField.defaultProps = {
  change: null,
  error: '',
  label: '',
  name: '',
  placeholder: '',
  type: 'text',
  upload: null,
  invalid: false,
};


export default InputField;