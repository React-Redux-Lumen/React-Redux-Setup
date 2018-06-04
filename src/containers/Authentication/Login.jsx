/* eslint-disable no-undef */

import React, { Component } from 'react'
import { connect } from "react-redux"
// import PropTypes from 'prop-types'
import TextInput from "../../components/common/Forms/TextInput"
import Button from "../../components/common/Button"

import { onFieldChange, setState } from "../../actions";





export default class Login extends Component {
  
  constructor() {
    super();
    // this.handleLogin = this.handleLogin.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  static defaultProps = {
    loginForm: {}
  };

  componentWillUnmount() {
  
    this.props.setState({
      loginForm: {}
    });
  }

  render() {
    const { loginForm } = this.props;
    return (
      <div>
        <h2>Login</h2>
        <div>
          <TextInput 
            name="username" 
            placeholder="Username" 
            label="Username" 
            value={loginForm.username}
            onChange={this.changeHandler.bind(this)} 
          />
        </div>
        <div>
          <TextInput 
            name="password" 
            placeholder="Password" 
            label="Password" 
            value={loginForm.password}
            onChange={this.changeHandler}/>
        </div>
        <div>
          <Button submit type="primary" onClick={() => this.handleClick()}>
            Login
          </Button>
          <Button submit type="primary" onClick={() => this.handleClick()}>
            Back
          </Button>
        </div>
        
      </div>
    );
  }


  changeHandler(name, value) {
    const data = {
      form: "loginForm",
      name,
      value
    };
    console.log('11111111111111111111', this.props);
    console.log('2222222222222222222222222', data);
    this.props.onFieldChange(data);
  }



}

function mapStateToProps(state, ownProps) {
  return {
    loginForm: state.forms.loginForm
  };
}

export const UserLoginContainer = connect(mapStateToProps, {
  onFieldChange,
  setState
})(Login);


