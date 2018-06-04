/* import {
  FIELD_ON_CHANGE,
  RESET_FORM,
  RESET_ALL_FORM,
  EDIT_FORM
} from "constant"; */

export const onFieldChange = state => {
  /* Usage:
  * {
      form: 'login', // String: Unique name for form
      name, // String: Unique name for input field
      value // Mix: Value of input field
    }
  */
    console.log('aaaaaaaaaaaaaaaaaaaaaa');
  return {
    type: "FIELD_ON_CHANGE",
    state
  };
};

export const resetForm = formName => {
  /* Usage:
  * resetForm('formname') // string: form name
  */
  return {
    type: "RESET_FORM",
    formName
  };
};

export const resetAllForm = () => {
  /* Usage:
  * resetAllForm()
  */
  return {
    type: "RESET_ALL_FORM"
  };
};

export const setFormFields = (form, data) => {
  /* Usage:
  * setFormFields('form', 'data') // string: form name
  */
  return {
    type: "EDIT_FORM",
    form,
    data
  };
};
