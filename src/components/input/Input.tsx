import React, { Component } from 'react';

interface InputProps {
  onChange: (search: string) => void;
  value: string;
}

class Input extends Component<InputProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
