import React from 'react';
import { FormField, LabelElement, InputElement, MultiSelectWrapper, MultiSelectField } from './styles';

const RadioGroup = (props) => (
  <FormField labelAlign="flex-start">
    {!props.nolable && renderInputLabel(props)}
    <InputElement wType={props.wType}>
      <MultiSelectWrapper blockAlign={props.blockAlign}>
        {props.options.map(option => {
          return (
            <MultiSelectField key={option.value} className="radio">
              <label>
                {option.label && <span>{option.label}</span>}
                <input
                  type="radio"
                  name={props.name}
                  value={option.value}
                  disabled={props.disabled}
                  onChange={checkChange.bind(this, props)}
                  checked={(props.selectedOption === option.value) ? true : false }
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
    props.onChange(e.target.name, e.target.value);
    return;
}

function renderInputLabel(props) {
  return <LabelElement>{props.label} {props.required && checkRequired()}</LabelElement>;
}

function checkRequired() {
  return <b>*</b>;
}

RadioGroup.defaultProps = {
  selectedOption: "",
  blockAlign: true
};

RadioGroup.propTypes = {
  name: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  selectedOption: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  onChange: React.PropTypes.func.isRequired,
  required: React.PropTypes.bool,
  blockAlign: React.PropTypes.bool
};

export default RadioGroup;
