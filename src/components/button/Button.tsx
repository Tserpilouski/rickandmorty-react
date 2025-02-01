import { Component } from 'react';

interface ButtonProps {
  action: () => void;
  name: string;
}

class Button extends Component<ButtonProps> {
  handleClick = () => {
    this.props.action();
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.name}</button>;
  }
}

export default Button;
