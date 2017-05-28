import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    const { children, onClick } = this.props;
    return(
      <a href="#" className="Button" onClick={onClick}>
        {children}
      </a>
    )
  }
}

export default Button;
