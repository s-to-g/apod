import React from 'react';
import svgSprite from '../../svg/symbol-defs.svg';
import './Icon.css';

const Icon = props => {
  const {name, classes} = props;
  return (
    <svg className={`Icon ${classes}`}>
      <use xlinkHref={`${svgSprite}#icon-${name}`} />
    </svg>
  );
}

export default Icon;
