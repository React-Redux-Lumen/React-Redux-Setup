import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {
  FormField,
  LabelElement,
  InputElement } from './styles';

export default class ComboBox extends Component {
  constructor (){
    super();
    this.onSelect = this.onSelect.bind(this);
  }

  static defaultProps = {
    multi: false,
    disabled: false,
    autofocus: false,
    clearable: false,
    searchable: false,
    value: '',
    wType: "305",
    sizeClass: "md"
  }

  checkRequired() {
    return <b>*</b>;
  }

  renderInputLabel() {
    const { label, required } = this.props;
    return <LabelElement>{label} {required && this.checkRequired()}</LabelElement>;
  }

  onSelect(newValue) {
    const {name, onChange} = this.props;
    onChange(name, newValue);
  }

  render() {
    const {
      name,
      multi,
      nolable,
      disabled,
      autofocus,
      clearable,
      searchable,
      options,
      value,
      wType,
      labelKey,
      valueKey,
      placeholder,
      sizeClass} = this.props;

    const wStyle = {
      width: `${wType}px`
    };

    return (
      <FormField>
        {!nolable && this.renderInputLabel()}
        <InputElement style={wStyle}>
          <Select
            simpleValue
            name={name}
            multi={multi}
            disabled={disabled}
            autofocus={autofocus}
            clearable={clearable}
            searchable={searchable}
            options={options}
            value={value}
            onChange={this.onSelect}
            labelKey={labelKey}
            valueKey={valueKey}
            placeholder={placeholder}
            className={sizeClass}
          />
        </InputElement>
      </FormField>
    );
  }
}

ComboBox.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  multi: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  clearable: React.PropTypes.bool,
  searchable: React.PropTypes.bool,
  value: React.PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  options: React.PropTypes.array.isRequired,
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.bool,
  labelKey: React.PropTypes.string,
  valueKey: React.PropTypes.string,
  placeholder: React.PropTypes.string
};
