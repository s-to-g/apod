import React from 'react';
import './Loader.css';

class Loader extends React.Component {
  render() {
    return(
      <div className="loader">
        <span className="loader__block"></span>
        <span className="loader__block"></span>
        <span className="loader__block"></span>
        <span className="loader__block"></span>
        <span className="loader__block"></span>
      </div>
    );
  }
}

export default Loader;
