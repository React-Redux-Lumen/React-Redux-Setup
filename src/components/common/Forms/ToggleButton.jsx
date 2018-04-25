import React, { Component } from 'react';
import Toggle from 'react-toggle';
import "react-toggle/style.css";
import { FormField } from './styles';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const{ onChange, name, label } = this.props;
    return (
      <FormField>
        <label>
          <Toggle
            defaultChecked={this.props.defaultChecked}
            label={label}
            icons={false}
            className={this.props.className}
            name={name}
            onChange={(e) => {
              onChange(name,e.target.checked);
            }} 
          />
        </label>
      </FormField>
    );
  }
}

ToggleButton.defaultProps = {
  wType: "210",
  onChange: () => {}
};

ToggleButton.propTypes = {
  label: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  name: React.PropTypes.string.isRequired,
  checked: React.PropTypes.oneOfType([
    React.PropTypes.bool,
    React.PropTypes.number,
  ])
};
export default ToggleButton;