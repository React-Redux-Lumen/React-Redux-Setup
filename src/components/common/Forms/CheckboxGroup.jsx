import React from 'react';
import { FormField, LabelElement, InputElement, MultiSelectWrapper, MultiSelectField } from './styles';

const CheckboxGroup = (props) => (
  <FormField labelAlign="flex-start">
    {!props.nolable && renderInputLabel(props)}
    <InputElement wType={props.wType}>
      <MultiSelectWrapper blockAlign={props.blockAlign}>
        {props.options.map(option => {
          return (
            <MultiSelectField key={option.value} className="checkbox">
              <label>
                {option.label && <span>{option.label}</span>}
                <input
                  type="checkbox"
                  name={props.name}
                  value={option.value}
                  disabled={props.disabled}
                  onChange={checkChange.bind(this, props)}
                  checked={props.selectedOptions.indexOf(option.value.toString()) > -1}
                />
                <div className="indicator"></div>
              </label>
            </MultiSelectField>
          );
        })}
      </MultiSelectWrapper>
    </InputElement>
  </FormField>
);

function checkChange(props, e) {
  if (props.selectedOptions.indexOf(e.target.value) > -1) {
    props.selectedOptions.splice(props.selectedOptions.indexOf(e.target.value), 1);
    props.onChange(e.target.name, props.selectedOptions);
  } else {
    props.selectedOptions.push(e.target.value);
    props.onChange(e.target.name, props.selectedOptions);
  }
}

function renderInputLabel(props) {
  return <LabelElement>{props.label} {props.required && checkRequired()}</LabelElement>;
}

function checkRequired() {
  return <b>*</b>;
}

CheckboxGroup.defaultProps = {
  selectedOptions: [],
  blockAlign: true
};

CheckboxGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  selectedOptions: React.PropTypes.array,
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.bool,
  blockAlign: React.PropTypes.bool
};

export default CheckboxGroup;
