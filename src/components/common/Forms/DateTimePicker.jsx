import React from 'react';
import { FormField, LabelElement, InputElement } from './styles';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const DateTimePicker = (props) => (
    <FormField>
      {!props.nolable && renderInputLabel(props)}
      <InputElement wType={props.wType}>
        <Datetime
          value={props.value}
          closeOnSelect={true}
          defaultValue={props.defaultValue}
          dateFormat={props.dateFormat}
          timeFormat={props.timeFormat}
          isValidDate={props.isValidDate}
          inputProps={{ placeholder: props.placeholder, disabled: props.inputProps}}
          onChange={(e) => props.onChange(props.name, setDateTimeFormat(props.dateFormat, props.timeFormat, e))}
        />
      </InputElement>
    </FormField>
);

function setDateTimeFormat(date, time, e) {
  let neededFormat = time ? `${date} ${time}` : `${date}`;
  try{
    let outputDate = e.format(neededFormat);
    if(outputDate !== 'undefined'){
      return outputDate;
    }
    throw 'g';
  }catch(g){
    return e;
  }
}

function renderInputLabel(props) {
  return <LabelElement>{props.label} {props.required && checkRequired()}</LabelElement>;
}

function checkRequired() {
  return <b>*</b>;
}

DateTimePicker.defaultProps = {
  value: "",
  dateFormat:"YYYY-MM-DD",
  timeFormat: "HH:mm:ss",
  placeholder: "Select a Date"
};

DateTimePicker.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  required: React.PropTypes.bool,
  onChange: React.PropTypes.func.isRequired
};

export default DateTimePicker;
