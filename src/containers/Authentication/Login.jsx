/* eslint-disable no-undef */

import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import TextInput from "../../components/common/Forms/TextInput"


export default class Login extends Component {

  render() {
    return (
      <div>
        <h2>Login</h2>
        <div>
          <TextInput name="username" placeholder="Username" label="Username" />
        </div>
        <div>
          <TextInput name="password" placeholder="Password" label="Password" />
        </div>
      </div>
    );
  }
}
