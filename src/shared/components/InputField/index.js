import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InputField extends Component {
  static propTypes = {
    valueContext: PropTypes.object.isRequired,
    valueName: PropTypes.string.isRequired
  };

  updateValue = (event) => {
    const { type, valueContext, valueName, onChange } = this.props;

    const value = type === 'checkbox' ? event.target.checked : event.target.value;

    valueContext.setState({ [valueName]: value });

    if (onChange) {
      onChange(event);
    }
  }

  render() {
    const { valueContext, valueName, ...inputProps } = this.props;

    return (
      <input {...inputProps} onChange={this.updateValue} />
    );
  }
}
