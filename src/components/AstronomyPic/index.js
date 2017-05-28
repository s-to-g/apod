import React from 'react';
import Button from '../Button';
import './AstronomyPic.css';

class AstronomicalPic extends React.Component {
  render() {
    const {result, onClick} = this.props;
    var sectionStyle = {
      backgroundImage: "url(" + result.url + ")"
    };
    return (
      <section className="AstronomyPicSection" style={ sectionStyle} >
        <Button onClick={onClick}>
          random
        </Button>
      </section>
    )
  }
}

export default AstronomicalPic;
