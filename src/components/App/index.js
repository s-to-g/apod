import React from 'react';
import {getRandomDate} from '../../utils/utils';
import AstronomyPic from '../AstronomyPic';
import Loader from '../Loader';
import './App.css';
import {
  PATH_BASE,
  PARAM_KEY,
  PARAM_DATE,
  DEFAULT_DATE
} from '../../constants';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      result: null,
      bgImg: '',
      date: DEFAULT_DATE
    };
    this.fetchAstronomicalPic = this.fetchAstronomicalPic.bind(this);
    this.initAstronomicalResult = this.initAstronomicalResult.bind(this);
    this.setAstronomicalResult = this.setAstronomicalResult.bind(this);
    this._setRandomDate = this._setRandomDate.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
    this.loadImage = this.loadImage.bind(this);
  }

  loadImage(result) {
    let image = new Image();
    const that = this;
    image.onload = function(){
      const bgImage = image.src;
      that.setAstronomicalResult(result, bgImage);
    };
    image.src = result.url;
  }

  setAstronomicalResult(result, image) {
    this.setState({
      result:result,
      bgImg: image,
      isLoading: false
    });
  }

  _setRandomDate() {
    const randomDate = getRandomDate();
    this.setState({date: randomDate}, () => this.fetchAstronomicalPic(this.state.date));
  }

  buttonClicked(e) {
    e.preventDefault();
    this._setRandomDate();
  }

  initAstronomicalResult(result) {
    if(result.media_type === "video") {
      this._setRandomDate();
    } else {
      this.loadImage(result);
      // this.setState({
      //   result:result
      // });
    }
  }

  fetchAstronomicalPic(date = this.state.date) {
    this.setState({ isLoading: true });
    fetch(`${PATH_BASE}?${PARAM_KEY}&${PARAM_DATE}${date}`)
      .then(result => {
        // HANDLE BAD HTTP REQUEST
        if(!result.ok) {
          this._setRandomDate();
        }
        return result.json();
      })
      .then(result => this.initAstronomicalResult(result))
      // HANDLE NETWORK ERROR
      .catch(error => console.log("error"));
      // WHAT SHOULD HAPPEN PN NETWORK ERROR
  }

  componentDidMount() {
    this.fetchAstronomicalPic();
  }

  render() {
    const { result, isLoading, bgImg } = this.state;
    if (!result) { return null; }
    return (
      <div>
        <AstronomyPic result={result} onClick={this.buttonClicked} bgImg={bgImg}/>
        { isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
