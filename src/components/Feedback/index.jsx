import FileField from 'components/FileField';
import InputField from 'components/InputField';
import Title from 'components/Title';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import Text from '../Text';
import { BlockStyle, FormStyle, SentStyle } from './style';

const Form = ({ change, fields, submit, title }) => (
  <div className="feedback-form">
    <Title title={title} big inverted uppercase />
    <form className="feedback-form__form" onSubmit={submit}>
      {fields.map(field => (
        <InputField key={field.name} change={value => change(field.name, value)} error={field.error} label={field.label} name={field.name} placeholder={field.placeholder} type={field.type} upload={field.type === 'textarea' ? 'file' : null} />
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
  fields: PropTypes.arrayOf(PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['email', 'text', 'textarea']),
  })),
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
      values: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, value) {
    const { values } = this.state;

    values[name] = value;

    this.setState({ values });
  }

  onSubmit(event) {
    event.preventDefault();

    const { values } = this.state;

    // TODO Validate and send feedback data

    console.log(values);
  }

  render() {
    const { title, fields } = this.props;

    return (
      <div className="feedback">
        <div className="feedback__container">
          <div className="feedback__container-left" />
          <div className="feedback__container-right">
            <div className="feedback__content">
              <Form change={this.onChange} fields={fields} submit={this.onSubmit} title={title} />
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
  fields: PropTypes.arrayOf(PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['email', 'text', 'textarea']),
  })),
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
