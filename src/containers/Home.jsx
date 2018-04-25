/* eslint-disable no-undef */

import React, { Component } from "react"
import Button from "../components/common/Button";

// import PropTypes from 'prop-types'

export default class Home extends Component {
  render() {
    return <div>
        <p>Home Page</p>
        <div className="test">
          <div className="test1">
            <p>aaaaaaaaaaaaaaaaaa</p>
            <button>aaaaaa</button>
          </div>
          <div className="test1">
            <p>bbbbbbbbbbbbbbbbbbbbbbbb</p>
            <button>bbbbbb</button>
          </div>
          <div className="test1">
            <p>cccccccccccccccccccccccc</p>
            <button>ccccc</button>
          </div>
          <Button submit type="primary" onClick={() => this.handleClick()}>
            sdsdsdsd
          </Button>
        </div>
        <p>Basic setup .</p>
      </div>;
  }

  handleClick () {
    console.log('ssssssssssssssssssssssssssssssssssss');
  }

}
