/* eslint-disable no-undef */

import React, { Component } from "react";
// import PropTypes from 'prop-types'
import TextInput from "../../components/common/Forms/TextInput";

export default class UserRegistration extends Component {
  render() {
    return <div>
        <h2>User Registration</h2>
        <div>
          <TextInput name="firstname" placeholder="First Name" label="First Name" />
        </div>
        <div>
          <TextInput name="lastname" placeholder="Last Name" label="Last Name" />
        </div>
        <div>
          <TextInput name="displayname" placeholder="Display Name" label="Display Name" />
        </div>
        <div>
          <TextInput name="username" placeholder="Username" label="Username" />
        </div>
        <div>
          <TextInput name="email" placeholder="Email" label="Email" />
        </div>
        <div>
          <TextInput name="Address" placeholder="Address" label="Address" />
        </div>
      </div>;
  }
}
