import FileField from 'components/FileField';
import InputField from 'components/InputField';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import { BlockStyle, FormStyle, SentStyle } from './style';

const Form = ({
  change, fields, submit, title, fieldInfo,
}) => (
  <div className="feedback-form">
    <Title title={title} big inverted uppercase />

    <form className="feedback-form__form" onSubmit={submit}>
      {fields.map(field => (
        <InputField
          key={field.name}
          change={value => change(field.name, value)}
          error={field.error}
          label={field.label}
          invalid={fieldInfo[field.name] !== undefined ? fieldInfo[field.name].invalid : null}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          upload={field.type === 'textarea' ? 'file' : null}
        />
      ))}
      <FileField change={value => change('file', value)} name="file" />
      <Button title="Submit" type="submit" long />
    </form>
    <style jsx>
      {FormStyle}
    </style>
  </div>
);

Form.propTypes = {
  change: PropTypes.func,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      error: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.oneOf(['email', 'text', 'textarea']),
    }),
  ),
  submit: PropTypes.func,
  title: PropTypes.string,
};
Form.defaultProps = {
  change: null,
  title: '',
  submit: null,
  fields: [],
};

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: { invalid: false, value: '' },
        email: { invalid: false, value: '' },
      },
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, values) {
    const { form } = this.state;
    const newForm = Object.keys(form).reduce((total, key) => {
      if (key === name) {
        total[key] = { ...values };
      } else {
        total[key] = { ...form[key] };
      }
      return total;
    }, {});

    this.setState({ form: { ...newForm } });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.isFormValid()) {
      console.log('Yeah!');
    } else {
      this.setErrorForFields();
    }

    // TODO Validate and send feedback data
  }

  setErrorForFields = () => {
    const { form } = this.state;

    const newForm = Object.keys(form).reduce((total, key) => {
      if (form[key].value === '') {
        total[key] = { ...form[key], invalid: true };
      } else {
        total[key] = { ...form[key] };
      }
      return total;
    }, {});

    this.setState({ form: { ...newForm } });
  }

  isFormValid = () => {
    const { form } = this.state;

    const isValid = Object.keys(form).filter(
      key => form[key].value === '' || form[key].invalid,
    );

    return isValid.length === 0;
  }

  render() {
    const { title, fields } = this.props;
    const { form } = this.state;

    return (
      <div className="feedback">
        <div className="feedback__container">
          <div className="feedback__container-left" />
          <div className="feedback__container-right">
            <div className="feedback__content">
              <Form
                change={this.onChange}
                fields={fields}
                submit={this.onSubmit}
                title={title}
                fieldInfo={form}
              />
            </div>
          </div>
        </div>
        <style jsx>
          {BlockStyle}
        </style>
      </div>
    );
  }
}

Block.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      error: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.oneOf(['email', 'text', 'textarea']),
    }),
  ),
  title: PropTypes.string,
};
Block.defaultProps = {
  title: '',
  fields: [],
};

const Sent = ({ text, title }) => (
  <div className="feedback-sent">
    <div className="feedback-sent__content">
      <Title title={title} big inverted uppercase />
      <div className="feedback-sent__text">
        <span>
          {text}
        </span>
      </div>
    </div>
    <style jsx>
      {SentStyle}
    </style>
  </div>
);

Sent.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
};
Sent.defaultProps = {
  text: '',
  title: '',
};

export { Block, Form, Sent };
