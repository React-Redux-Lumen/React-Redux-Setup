import React from 'react';
import { FormField, LabelElement, InputElement, SelectInputField } from './styles';

const SelectInput = (props) => {
  return (
    <FormField>
      {!props.nolable && renderInputLabel(props)}
      <InputElement wType={props.wType}>
        <SelectInputField
          className="select"
          name={props.name}
          value={props.selectedOption}
          disabled={props.disabled}
          onChange={checkChange.bind(this, props)}>
          <option value="">{props.placeholder}</option>
          {props.options.map(opt => {
            return (
              <option
              key={opt.value}
              value={opt.value}>{opt.label}</option>
            );
          })}
        </SelectInputField>
      </InputElement>
    </FormField>
  );
};

function checkChange(props, e) {
  props.onSelect(e.target.name, e.target.value);
}

function renderInputLabel(props) {
  return <LabelElement>{props.label} {props.required && checkRequired()}</LabelElement>;
}

function checkRequired() {
  return <b>*</b>;
}

SelectInput.defaultProps = {
  disabled: false
};

SelectInput.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  selectedOption: React.PropTypes.string,
  onSelect: React.PropTypes.func.isRequired,
  placeholder: React.PropTypes.string,
  isRequired: React.PropTypes.bool,
};

export default SelectInput;
