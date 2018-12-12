import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CustomButton extends Component {

  static propTypes = {
    text: PropTypes.string,
    children: PropTypes.any,
    color: PropTypes.string,
    type: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    route: PropTypes.string,
    stateObject: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  };

  render() {
    const { text, children, color, type, width, height, route, stateObject, onClick, disabled } = this.props;

    const buttonStyle = this.buttonStyle(type, color);
    const textStyle = this.textStyle(type, color ? color : 'white');
    const customMeasures = this.customMeasures(width, height);

    return (
      <div className={buttonStyle} style={customMeasures} onClick={onClick}>

          { (route && !disabled) ?
            route.charAt(0) === '/' ?
              <Link
                className={textStyle}
                to={{pathname: route, state: stateObject}}
              >
                {text}
                {children}
              </Link>

              :
              <a className={textStyle} href={route}>
                {text}
                {children}
              </a>
            :
            <h2 className={textStyle}>
              {text}
              {children &&
                <div className="hidden-content">
                  {children}
                </div>
              }
            </h2>
          }
      </div>
    );
  }

  customMeasures = (width, height) => {
    return (
      {
        width: width,
        height: height
      }
    )
  }

  buttonStyle = (style, color) => {
    switch (style) {
      case "filled":
        return `custom-button filled ${color}`
      case "border":
        return `custom-button border ${color}`
      case "empty":
        return 'custom-button'
      default:
        return 'custom-button'
    }
  }

  textStyle = (style, color) => {
    switch (style) {
      case "filled":
        return `custom-button-text`
      case "border":
        return `custom-button-text ${color}`
      case "empty":
        return `custom-button-text ${color}`
      default:
        return 'custom-button-text'
    }
  }
}
