import React from 'react';
import { FormField, LabelElement, ValueElement } from './styles';

const TextValue = (props) => (
  <FormField>
    <LabelElement>{props.label}</LabelElement>
    <ValueElement
      className={setClass(props)}>
      {props.value || ""}
    </ValueElement>
  </FormField>
);

function setClass(props) {
  if (props.capitalize || props.color )
    return `capitalize ${props.color}`;
  else if (props.allowed === "allowed")
    return "allowed";
  else if (props.allowed === "no")
    return "no";
  else
    return "";
}

export default TextValue;
