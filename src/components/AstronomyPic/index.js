import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import InfoWrapper from '../InfoWrapper';
import './AstronomyPic.css';

class AstronomicalPic extends React.Component {
  render() {
    const {result, onClick, bgImg} = this.props;
    let componentClasses = ['AstronomyPicSection'];
    if(bgImg !== '') { componentClasses.push('is-visible'); }
    let sectionStyle = {
      backgroundImage: "url(" + bgImg + ")"
    };
    return (
      <section className={componentClasses.join(' ')} style={sectionStyle} >
        <Button onClick={onClick}>
          explore
        </Button>
        <InfoWrapper result={result} bgImg={bgImg} />
      </section>
    )
  }
}

AstronomicalPic.propTypes = {
  result: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  bgImg: PropTypes.string.isRequired
}

export default AstronomicalPic;
