import React, { Component, PropTypes } from 'react';
import { PrimaryButton } from './style';

const buttonMap = {
  primary: PrimaryButton/* ,
  second: SecondButton,
  cancel: CancelButton,
  delete: DeleteButton */
};

export default class Button extends Component {
/*   static propTypes = {
    submit: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.string,
    link: PropTypes.string
  } */

  static defaultProps = {
    link: '',
    size: '',
    submit: false,
    outline: false,
    disabled: false
  }

  makeCSSClass() {
    const { outline, link, size } = this.props;
    return outline ? "outline " + size : link ? size + " " + link : "" + size;
  }

  render() {
    const { children, type, onClick, submit, disabled } = this.props;
    const multipleClasses = this.makeCSSClass();
    return React.createElement(
      buttonMap[type],
      {
        onClick,
        type: submit ? 'submit' : 'button',
        className: multipleClasses,
        disabled
      },
      [children]
    );
  }
}
