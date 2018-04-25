import React from 'react';
import { FormField, LabelElement, InputElement, TextAreaField } from './styles';

const TextArea = (props) => (
  <FormField labelAlign="baseline">
    {!props.nolable && renderInputLabel(props)}
    <InputElement style={setWidth(props)}>
      <TextAreaField
        name={props.name}
        rows={props.rows}
        value={props.value}
        maxLength={props.maxLength}
        placeholder={props.placeholder}
        style={props.resize ? null : { resize: 'none' }}
        onChange={(e) => props.onChange(props.name, e.target.value)}
      />
    </InputElement>
  </FormField>
);

function setWidth(props) {
  const wStyle = {
    width: `${props.wType}px`
  };
  return wStyle;
}

function renderInputLabel(props) {
  return <LabelElement>{props.label} {props.required && checkRequired()}</LabelElement>;
}

function checkRequired() {
  return <b>*</b>;
}

TextArea.defaultProps = {
  content: "",
  resize: false,
  wType: "305"
};

TextArea.propTypes = {
  label: React.PropTypes.string.isRequired,
  rows: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  maxLength: React.PropTypes.number,
  value: React.PropTypes.string,
  resize: React.PropTypes.bool,
  required: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired
};

export default TextArea;
