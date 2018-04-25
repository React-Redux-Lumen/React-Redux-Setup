// import { FIELD_ON_CHANGE, RESET_FORM, RESET_ALL_FORM, EDIT_FORM } from 'constant';

function setOnChangeData(state, newState) {
  return { ...state, [newState.form]: { ...state[newState.form], [newState.name]: newState.value } };
}

function resetForm(state, formName) {
  return { ...state, [formName]: {} };
}

function setFormData(state, action) {
  return { ...state, [action.form] : action.data };
}

export default function(state = {}, action) {
  switch (action.type) {
  case "FIELD_ON_CHANGE":
    return setOnChangeData(state, action.state);
  case "RESET_FORM":
    return resetForm(state, action.formName);
  case "RESET_ALL_FORM":
    return {};
  case "EDIT_FORM":
    return setFormData(state, action);
  default:
    return state;
  }
}
