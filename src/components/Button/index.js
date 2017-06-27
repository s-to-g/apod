import React from 'react';
import PropTypes from 'prop-types';
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

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button;
