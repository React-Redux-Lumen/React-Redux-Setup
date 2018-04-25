import React from 'react';
import { FormField, LabelElement, InputElement, MultiSelectField } from './styles';

const Checkbox = (props) => (
  <FormField>
    {!props.nolable && renderInputLabel(props)}
    <InputElement wType={props.wType}>
      <MultiSelectField className="checkbox">
        <label>
          <span>{props.valueText}</span>
          <input
            type="checkbox"
            name={props.name}
            checked={props.checked}
            onChange={checkChange.bind(this, props)}
          />
          <div className="indicator"></div>
        </label>
      </MultiSelectField>
    </InputElement>
  </FormField>
);

function checkChange(props) {
  props.onChange(props.name, !props.checked);
}

function renderInputLabel(props) {
  return <LabelElement>{props.label} {props.required && checkRequired()}</LabelElement>;
}

function checkRequired() {
  return <b>*</b>;
}

Checkbox.defaultProps = {
  valueText: "",
  label: ""
};

Checkbox.propTypes = {
  label: React.PropTypes.string.isRequired,
  valueText: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.bool,
  checked: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
  ])
};

export default Checkbox;
