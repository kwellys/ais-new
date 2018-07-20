import RemoveIcon from 'assets/img/remove.svg';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { InputStyle, ViewStyle } from './style';

const FileView = ({ clear, file }) => (
  <div className={`file-view  ${file === null ? 'invisible' : ''}`}>
    <span>
      {file == null ? '---' : file.name}
      <span className="file-view__remove" onClick={clear}>
        <img className="file-view__remove-image" src={RemoveIcon} />
      </span>
    </span>
    <style jsx>
      {ViewStyle}
    </style>
  </div>
);

FileView.propTypes = {
  clear: PropTypes.func,
  file: PropTypes.shape({
    name: PropTypes.string,
  }),
};
FileView.defaultProps = {
  clear: null,
  file: {
    name: '',
  },
};

class FileField extends Component {
  constructor(props) {
    super(props);

    this.element = null;

    this.state = {
      file: null,
    };

    this.onClear = this.onClear.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClear() {
    if (this.element != null) {
      this.setState({ file: null });

      this.element.value = null;
    }
  }

  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];

      this.setState({ file });

      const { change } = this.props;

      change(file);
    } else {
      this.setState({ file: null });
    }
  }

  render() {
    const { name } = this.props;
    const { file } = this.state;

    return (
      <div className="input-file">
        <input className="input-file__field" type="file" id={name} name={name} ref={(element) => { this.element = element; }} onChange={this.onChange} />
        <FileView file={file} clear={this.onClear} />
        <style jsx>
          {InputStyle}
        </style>
      </div>
    );
  }
}

FileField.propTypes = {
  change: PropTypes.func,
  name: PropTypes.string,
};
FileField.defaultProps = {
  change: null,
  name: '',
};

export default FileField;
