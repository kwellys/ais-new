import FileField from '../FileField';
import InputField from '../InputField';
import Title from '../Title';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import { BlockStyle, FormStyle, SentStyle } from './style';

const Form = ({
                change, fields, submit, title, fieldInfo, loading, success, error,
              }) => (
  <div className="feedback-form">
    <Title title={title} big inverted uppercase />

    <form
      name="customer-submission-form"
      action="/"
      data-netlify="true"
      className="feedback-form__form"
      onSubmit={submit}>
      <input type="hidden" name="form-name" value="customer-submission-form" />
      {fields.map(field => (
        <InputField
          key={field.name}
          change={value => change(field.name, value)}
          error={field.error}
          label={field.label}
          invalid={
            fieldInfo[field.name] !== undefined
              ? fieldInfo[field.name].invalid
              : null
          }
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          upload={field.type === 'textarea' ? 'file' : null}
        />
      ))}
      <FileField change={value => change('file', value)} name="file" />
      <Button title="Submit" type="submit" long loading={loading} success={success} error={error} />
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
      type: PropTypes.oneOf(['email', 'text', 'textarea', 'number']),
    }),
  ),
  submit: PropTypes.func,
  title: PropTypes.string,
  fieldInfo: PropTypes.shape({
    name: PropTypes.shape({
      invalid: PropTypes.bool,
      value: PropTypes.string,
      required: PropTypes.bool,
    }),
    email: PropTypes.shape({
      invalid: PropTypes.bool,
      value: PropTypes.string,
      required: PropTypes.bool,
    }),
    phone: PropTypes.shape({
      invalid: PropTypes.bool,
      value: PropTypes.string,
    }),
  }),
  loading: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
};
Form.defaultProps = {
  change: null,
  title: '',
  submit: null,
  fields: [],
  fieldInfo: {},
  loading: false,
  success: false,
  error: false,
};

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    if (typeof data[key] === "string") {
      formData.append(key, data[key]);
    } else {
      formData.append(key, data[key].value);
    }
  }


  return formData;
}

class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        name: { invalid: false, value: '', required: true },
        email: { invalid: false, value: '', required: true },
        phone: { invalid: false, value: '' },
      },
      loading: false,
      success: false,
      error: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(name, values) {
    const { form } = this.state;
    const { setEmailError } = this.props;
    const newForm = Object.keys(form).reduce((total, key) => {
      if (key === name) {
        total[key] = { ...values };
      } else {
        total[key] = { ...form[key] };
      }
      return total;
    }, {});
    if (name === 'email') {
      setEmailError('Email isn’t correct');
    }

    this.setState({ form: { ...newForm } });
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.isFormValid()) {
      const form = event.target;
      fetch("/", {
        method: "POST",
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state.form
        })
      })
        .then(() => {
          for (var pair of encode({
            "form-name": form.getAttribute("name"),
            ...this.state.form
          }).entries()) {
            console.log(pair[0]+ ', ' + pair[1]);
          }
        })
        .catch(error => alert(error));
    } else {
      this.setErrorForFields();
    }

    // TODO Validate and send feedback data
  }


  setErrorForFields = () => {
    const { form } = this.state;
    const { setEmailError } = this.props;

    setEmailError('Enter email');


    const newForm = Object.keys(form).reduce((total, key) => {
      if (form[key].value === '' && form[key].required) {
        total[key] = {
          ...form[key],
          invalid: true,
        };
      } else {
        total[key] = { ...form[key] };
      }
      return total;
    }, {});

    this.setState({ form: { ...newForm } });
  }

  simulateSendForm = () => {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false, error: true }), 1800);
    setTimeout(() => this.setState({ error: false, loading: true }), 3000);
    setTimeout(() => this.setState({ loading: false, success: true }), 3800);
  }

  isFormValid = () => {
    const { form } = this.state;

    const isValid = Object.keys(form).filter(
      key => form[key].value === '' && form[key].required,
    );

    return isValid.length === 0;
  }

  render() {
    const { title, fields } = this.props;
    const {
      form, loading, success, error,
    } = this.state;

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
                loading={loading}
                success={success}
                error={error}
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
      type: PropTypes.oneOf(['email', 'text', 'textarea', 'number']),
    }),
  ),
  title: PropTypes.string,
  setEmailError: PropTypes.func,
};
Block.defaultProps = {
  title: '',
  fields: [],
  setEmailError: {},
};

const Sent = ({ text, title }) => (
  <div className="feedback-success">
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
