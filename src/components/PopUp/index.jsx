import { Form as Feedback, Sent } from "../Feedback";
import PropTypes from "prop-types";
import React, { Component } from "react";

import style from "./style";

function encode(data) {
  const formData = new FormData();
  const res = Object.keys(data).reduce(((prev, val) => {
    return {
      ...prev,
      [val] : data[val].value,
    }
  }),{});
  res['form-name'] = data['form-name'];
  res['file'] = data['file'];
  console.log(res)
  for (const key of Object.keys(res)) {
    formData.append(key, res[key]);
  }

  return formData;
}

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sent: false,
      timer: null,
      values: {},
      counter: 5,
      startedInterval: false,
      form: {
        name: { invalid: false, value: "", required: true },
        email: { invalid: false, value: "", required: true },
        phone: { invalid: false, value: "" },
        message: '',
        file: null
      },
      loading: false,
      success: false,
      error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setErrorForFields = () => {
    const { form } = this.state;
    const { setEmailError } = this.props;

    setEmailError("Enter email");

    const newForm = Object.keys(form).reduce((total, key) => {
      if (form[key].value === "" && form[key].required) {
        total[key] = {
          ...form[key],
          invalid: true
        };
      } else {
        total[key] = { ...form[key] };
      }
      return total;
    }, {});

    this.setState({ form: { ...newForm } });
  };

  isFormValid = () => {
    const { form } = this.state;

    const isValid = Object.keys(form).filter(
      key => form[key].value === "" && form[key].required
    );

    return isValid.length === 0;
  };

  simulateSendForm = () => {
    this.setState({ loading: true });
    setTimeout(() => this.setState({ loading: false, error: true }), 1800);
    setTimeout(() => this.setState({ error: false, loading: true }), 3000);
    setTimeout(() => this.setState({ loading: false, success: true }), 3800);
  };

  handleClick(e) {
    if (e.target.classList.value.indexOf("b-pop-up__content") !== -1) {
      document.getElementsByTagName("body")[0].style = "";
      document.querySelector(".b-header__content").style = "";
      document.querySelector(".rocketchat-widget").style = `
                  position: fixed; 
                  width: 320px; 
                  height: 30px; 
                  border-top-left-radius: 5px; 
                  border-top-right-radius: 5px; 
                  bottom: 0px;
                  right: 50px;
                  z-index: 12345;`

      this.setState({ sent: false });

      const { onClose } = this.props;

      onClose();
    }
  }

  handleChange(name, values) {
    const { form } = this.state;
    const newForm = Object.keys(form).reduce((total, key) => {
      if (key === name) {
        total[key] = values;
      } else {
        total[key] = { ...form[key] };
      }
      console.log(total)
      return total;
    }, {});

    this.setState({ form: { ...newForm } });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isFormValid()) {
      const form = event.target;
      this.setState({ loading: true })
      //form.submit();
      fetch("/", {
        method: "POST",
        body: encode({
          "form-name": form.getAttribute("name"),
          ...this.state.form
        })
      })
        .then(this.setState({ loading: false, success: true, sent: true }))
        .catch(this.setState({ error: true }))
    } else {
      this.setErrorForFields();
    }
  }

  render() {
    const { fields, onClose, popup, showPopUp, setEmailError } = this.props;
    const { form } = this.state;
    const renderFeedback = () => {
      const { sent, counter, startedInterval } = this.state;

      if (sent) {
        const text = popup.sent.text.replace(/\[numberSec\]/, counter);
        if (!startedInterval) {
          const inverval = setInterval(() => {
            if (this.state.counter === 0) {
              clearInterval(inverval);
              onClose();
            }

            this.setState(prev => ({
              counter: prev.counter - 1,
              startedInterval: true
            }));
          }, 1000);
        }

        return <Sent text={text} title={popup.sent.title} />;
      }
      const { loading, success, error } = this.state;
      return (
        <Feedback
          title={popup.title}
          fields={fields}
          change={this.handleChange}
          submit={this.handleSubmit}
          fieldInfo={form}
          setEmailError={setEmailError}
          loading={loading}
          success={success}
          error={error}
          formName='modal-form'
        />
      );
    };

    const renderPopUp = () => {
      if (showPopUp) {
        if (document.body.clientWidth - window.innerWidth !== 0) {
          document.getElementsByTagName("body")[0].style =
            "overflow: hidden;padding-right: 15px;";
          document.querySelector(".b-header__content").style =
            "padding-right: 15px;";
          document.querySelector(".rocketchat-widget").style = `
        position: fixed; 
        width: 320px; 
        height: 30px; 
        border-top-left-radius: 5px; 
        border-top-right-radius: 5px; 
        bottom: 0px;
        right: 65px;
        z-index: 12345;
        `;  
        }
      }

      return (
        <div className="b-pop-up">
          <div className="b-pop-up__content" onClick={e => this.handleClick(e)}>
            <div className="b-pop-up__box">
              <button
                className="b-pop-up__close"
                onClick={() => {
                  document.getElementsByTagName("body")[0].style = "";
                  document.querySelector(".b-header__content").style = "";
                  document.querySelector(".rocketchat-widget").style = `
                  position: fixed; 
                  width: 320px; 
                  height: 30px; 
                  border-top-left-radius: 5px; 
                  border-top-right-radius: 5px; 
                  bottom: 0px;
                  right: 50px;
                  z-index: 12345;`

                  this.setState({ sent: false });

                  onClose();
                }}
                type="button"
              />
              {renderFeedback()}
            </div>
          </div>
          <style jsx>{style}</style>
        </div>
      );
    };

    return <div>{showPopUp ? renderPopUp() : null}</div>;
  }
}

PopUp.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      error: PropTypes.string,
      label: PropTypes.string,
      name: PropTypes.string,
      placeholder: PropTypes.string,
      type: PropTypes.oneOf(["email", "text", "textarea", "number"])
    })
  ),
  onClose: PropTypes.func.isRequired,
  popup: PropTypes.shape({
    sent: PropTypes.shape({
      text: PropTypes.string,
      title: PropTypes.string
    }),
    title: PropTypes.string
  }),
  showPopUp: PropTypes.bool,
  setEmailError: PropTypes.func.isRequired
};
PopUp.defaultProps = {
  fields: [],
  popup: {
    sent: {
      text: "",
      title: ""
    },
    title: ""
  },
  showPopUp: false
};

export default PopUp;
