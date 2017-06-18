import React from 'react';
import Button from '../Button';
import InfoWrapper from '../InfoWrapper';
import './AstronomyPic.css';

class AstronomicalPic extends React.Component {
  render() {
    const {result, onClick, bgImg} = this.props;
    // console.log(bgImg);
    // let imgUrl = bgImg !== '' ? bgImg : result.url;
    let sectionStyle = {
      backgroundImage: "url(" + bgImg + ")"
    };
    return (
      <section className="AstronomyPicSection" style={ sectionStyle} >
        <InfoWrapper result={result} />
        <Button onClick={onClick}>
          random
        </Button>
      </section>
    )
  }
}

export default AstronomicalPic;
