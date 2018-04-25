import styled from 'styled-components';

export const FormField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: ${props => props.labelAlign || "center"};
`;

export const LabelElement = styled.label`
  color: #666;
  display: block;
  font-size: 0.9em;
  width: 200px;
  padding-right: 20px;
  text-align: right;
  word-wrap: break-word;
  b {
    color: #EE3233;
    font-weight: 400;
  }

  @media (max-width: 1200px) {
    width: 125px;
  }
`;

export const InputElement = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ValueElement = styled.div`
  color: #444;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-width: 305px;
  &.capitalize {
    text-transform: capitalize;
    min-width: 115px;
  }

  &.activated {
    color: #5cb85c;
  }

  &.banned {
    color: #cc0033;
  }

  &.disabled {
    color: pink;
  }

  &.linksent {
    color: #f0ad4e;
  }

  &.allowed {
    background: #fff url('/images/checkbox-view.png') no-repeat;
    height: 9px;
    padding-left: 20px;
  }

  &.no {
    height: 9px;
    padding-left: 20px;
  }
`;

export const Addon = styled.span.attrs({
	size: props => props.size || '30'
})`
  border: 1px solid #ccc;
  background-color: #fff;
  color: #555;
  display: block;
  font-size: 0.9em;
  text-align: center;

  height: ${props => props.size}px;
  line-height: ${props => props.size}px;
  width: ${props => props.size}px;
`;

export const AddonLeft = Addon.extend`
  border-right: 0;
  &.search {
    background: url('/images/search-icon.png') no-repeat center;
    text-indent: -999999px;
  }
`;

export const AddonRight = Addon.extend`
  border-left: 0;
`;

export const TextInputField = styled.input.attrs({
	size: props => props.size || '30'
})`
  border: 1px solid #ccc;
  background-color: #fff;
  display: flex;
  font-size: 0.9em;
  font-weight: 300;
  color: #555;
  padding: 0 12px;
  width: 100%;

	height: ${props => props.size}px;
	line-height: ${props => props.size}px;
  margin-top: ${props => props.guest ? -1 : 0}px;
  &:focus {
    border-color: #3238ff;
    position: relative;
    z-index: 2;
  }
`;

export const TextAreaField = styled.textarea`
  border: 1px solid #ccc;
  vertical-align: baseline;
  width: 100%;
  min-height: 34px;
  background-color: #fff;
  color: #555;
  font-size: 0.9em;
  font-weight: 300;
  padding: 6px 12px;
  display: block;
`;

export const SelectInputField = styled.select`
  background: #fff url('/images/arrow-down.png') no-repeat 97% center;
  -webkit-appearance: none;
  padding: 8px 36px 8px 12px;
  border: 1px solid #888;
  vertical-align: baseline;
  width: 100%;
  min-height: 30px;
  color: #666;
  font-size: 0.9em;
  font-weight: 300;
  cursor: pointer;
  option{
    color: #666;
    font-size: 1em;
    font-weight: 300;
  }
`;

export const MultiSelectWrapper = styled.div`
  display: flex;
  flex-direction: ${props => props.blockAlign ? "column" : "row"};
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  .checkbox,
  .radio {
    margin-right: ${props => props.blockAlign ? 0 : 10}px;
    margin-bottom: ${props => props.blockAlign ? 10 : 0}px;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

export const MultiSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  &:last-of-type .checkbox {
    margin-bottom: 0;
  }
`;

export const MultiSelectField = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  width: 100%;
  &.checkbox > label,
  &.radio > label {
    color: #666;
    font-size: 1em;
    padding-left: 25px;
    height: 19px;
    display: inline-block;
    line-height: 21px;
    cursor: pointer;
    span {
      font-size: 0.92em;
    }
  }

  input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &.checkbox input {
    box-sizing: border-box;
    font-size: 14px;
    left: 0;
    margin: 0;
    padding: 2px;
    position: absolute;
    vertical-align: baseline;
  }

  &.checkbox .indicator {
    font-size: 0.85em;
    position: absolute;
    top: 2px;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid #ccc;
    box-shadow: inset 0 0 5px #eee;
    background-color: #fff;
  }

  &.checkbox .indicator::before,
  &.checkbox .view-indicator::before{
    content: '';
  }

  &.checkbox input:checked ~ .view-indicator::before {
    position: absolute;
    top: 2px;
    left: 0;
    height: 19px;
    width: 12px;
    background: url('/images/checkbox-view.png') no-repeat center;
  }

  &.checkbox input:checked ~ .indicator {
    background-color: #fff;
    border: 1px solid #666;
  }

  &.checkbox input:checked ~ .indicator::before {
    content: 'X';
    color: #666;
    height: 16px;
    left: -1px;
    top: -4px;
    width: 16px;
    position: absolute;
    padding: 1px 0 0 4px;
  }

  &.radio input {
    box-sizing: border-box;
    font-size: 14px;
    left: 0;
    margin: 0;
    padding: 2px;
    position: absolute;
    vertical-align: baseline;
  }

  &.radio .indicator {
    position: absolute;
    top: 3px;
    left: 0;
    height: 16px;
    width: 16px;
    border: 1px solid #ccc;
    box-shadow: inset 0 0 5px #eee;
    border-radius: 50%;
    background-color: #fff;
  }

  &.radio input:checked ~ .indicator {
    background-color: #fff;
  }

  &.radio input:checked ~ .indicator::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    height: 8px;
    width: 8px;
    border-radius: 50%;
    background-color: #888;
  }
`;

export const EditRoles = styled.a`
  background: url('/images/rm-edit.png') no-repeat center;
  display: block;
  height: 16px;
  width: 16px;
  text-indent: -999999px;
`;
