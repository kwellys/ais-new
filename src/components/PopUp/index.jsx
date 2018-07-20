import { Form as Feedback, Sent } from 'components/Feedback';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import style from './style';

class PopUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sent: false,
      timer: null,
      values: {},
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    if (e.target.classList.value.indexOf('b-pop-up__content') !== -1) {
      document.getElementsByTagName('body')[0].style = '';

      this.setState({ sent: false });

      const { onClose } = this.props;

      onClose();
    }
  }

  handleChange(name, value) {
    const { values } = this.state;

    values[name] = value;

    this.setState({ values });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { timer, values } = this.state;

    if (timer != null) {
      clearTimeout(timer);
    }

    // TODO Validate and send feedback data

    console.log(values);

    this.setState({
      sent: true,
      timer: setTimeout(() => {
        this.setState({ sent: false });
      }, 5000),
    });
  }

  render() {
    const { fields, onClose, popup, showPopUp } = this.props;

    const renderFeedback = () => {
      const { sent } = this.state;

      if (sent) {
        return (
          <Sent text={popup.sent.text} title={popup.sent.title} />
        );
      }

      return (
        <Feedback title={popup.title} fields={fields} change={this.handleChange} submit={this.handleSubmit} />
      );
    };

    const renderPopUp = () => {
      if (showPopUp) {
        document.getElementsByTagName('body')[0].style = 'overflow: hidden;padding-right: 20px;';
      }

      return (
        <div className="b-pop-up">
          <div className="b-pop-up__content" onClick={e => this.handleClick(e)}>
            <div className="b-pop-up__box">
              <button
                className="b-pop-up__close"
                onClick={() => {
                  document.getElementsByTagName('body')[0].style = '';

                  this.setState({ sent: false });

                  onClose();
                }}
                type="button"
              />
              {renderFeedback()}
            </div>
          </div>
          <style jsx>
            {style}
          </style>
        </div>
      );
    };

    return (
      <div>
        {showPopUp ? renderPopUp() : null}
      </div>
    );
  }
}

PopUp.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    error: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf(['email', 'text', 'textarea']),
  })),
  onClose: PropTypes.func.isRequired,
  popup: PropTypes.shape({
    sent: PropTypes.shape({
      text: PropTypes.string,
      title: PropTypes.string,
    }),
    title: PropTypes.string,
  }),
  showPopUp: PropTypes.bool,
};
PopUp.defaultProps = {
  fields: [],
  popup: {
    sent: {
      text: '',
      title: '',
    },
    title: '',
  },
  showPopUp: false,
};

export default PopUp;
