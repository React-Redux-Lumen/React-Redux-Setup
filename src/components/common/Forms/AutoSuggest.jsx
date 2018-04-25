import React, { Component } from 'react';
import {
  FormField,
  LabelElement,
  InputElement } from './styles';
import { Typeahead } from 'react-bootstrap-typeahead';

class AutoSuggest extends Component {
  setWidth() {
    const wStyle = {
      width: `${this.props.wType}px`
    };
    return wStyle;
  }

  renderInputLabel() {
    const { label, required } = this.props;
    return <LabelElement>{label} {required && this.checkRequired()}</LabelElement>;
  }

  checkRequired() {
    return <b>*</b>;
  }

  render() {
    const {
      nolable,
      name,
      labelKey,
      options,
      multiple,
      clearButton,
      placeholder,
      onChange,
      selected,
      defaultSelected,
      dropup,
      disabled,
      allowNew } = this.props;
      return (
        <FormField>
          {!nolable && this.renderInputLabel()}
          <InputElement style={this.setWidth()}>
            <Typeahead
              name={name}
              labelKey={labelKey}
              options={options}
              multiple={multiple}
              clearButton={clearButton}
              placeholder={placeholder}
              onChange={onChange}
              selected={selected}
              defaultSelected={defaultSelected}
              dropup={dropup}
              disabled={disabled}
              allowNew={allowNew}
            />
          </InputElement>
        </FormField>
      );
    }
}

AutoSuggest.defaultProps = {
  clearButton: true,
  multiple: false,
  disabled: false,
  placeholder: '',
  selected: [],
  defaultSelected: [],
  options: [],
  labelKey:'',
  wType: "305",
  onChange: () => {},
  allowNew: false
};

AutoSuggest.propTypes = {
  name: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired,
  labelKey: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  defaultSelected: React.PropTypes.array.isRequired,
  selected: React.PropTypes.array.isRequired,
  required: React.PropTypes.bool,
  multiple: React.PropTypes.bool,
  dropup: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};

export default AutoSuggest;
