import React, { Component } from 'react';
import {
  FormField,
  LabelElement,
  InputElement,
  TextInputField,
  AddonLeft,
  AddonRight } from './styles';

class TextInput extends Component {
  static defaultProps = {
    onChange: () => {},
    nolable: false,
    addonLeft: '',
    addonRight: '',
    disabled: '',
    wType: "305"
  }

  componentDidMount() {
    if (this.props.autoFocus) {
      this.input.focus();
    }
  }

  render() {
    //eslint-disable-next-line
    const {
      type,
      maxLength,
      name,
      size,
      value,
      wType,
      nolable,
      onChange,
      disabled,
      ...rest } = this.props;

    const wStyle = {
      width: `${wType}px`
    };

    return (
        <FormField>
          {!nolable && this.renderInputLabel()}
          <InputElement style={wStyle}>
            { this.renderLeftAddons() }
            <TextInputField
              name={name}
              maxLength={maxLength}
              type={type}
              size={size}
              disabled={disabled}
              value={value ? value : ""}
              ref={(ref) => this.input = ref}
              onChange={(e) => onChange(name, e.target.value)}
              {...rest}
            />
            { this.renderRightAddons() }
          </InputElement>
        </FormField>
    );
  }

  renderInputLabel() {
    const { label, required } = this.props;
    return <LabelElement>{label} {required && this.checkRequired()}</LabelElement>;
  }

  renderLeftAddons() {
    const { addonLeft, size } = this.props;
    return addonLeft ? <AddonLeft className={addonLeft} size={size}>{this.displayAddons(addonLeft)}</AddonLeft> : "";
  }

  renderRightAddons() {
    const { addonRight, size } = this.props;
    return addonRight ? <AddonRight className={addonRight} size={size}>{this.displayAddons(addonRight)}</AddonRight> : "";
  }

  displayAddons(value) {
    switch (value) {
      case "dollar":
        return "$";
      case "percentage":
        return "%";
      case "kilo":
        return "kg";
      case "search":
        return "search";
      default:
        return value;
    }
  }

  focusInput() {
    this.input.focus();
  }

  blurInput() {
    this.input.blur();
  }

  checkRequired() {
    return <b>*</b>;
  }
}

export default TextInput;
