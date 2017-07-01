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
    this.setRandomDate = this.setRandomDate.bind(this);
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

  setRandomDate() {
    const randomDate = getRandomDate();
    this.setState({date: randomDate}, () => this.fetchAstronomicalPic(this.state.date));
  }

  buttonClicked(e) {
    e.preventDefault();
    this.setRandomDate();
  }

  setAstronomicalResult(result, image) {
    this.setState({
      result:result,
      bgImg: image,
      isLoading: false
    });
  }

  initAstronomicalResult(result) {
    if(result.media_type === "video") {
      this.setRandomDate();
    } else {
      this.setState({bgImg: ''});

      this.loadImage(result);
    }
  }

  fetchAstronomicalPic(date = this.state.date) {
    this.setState({ isLoading: true });
    fetch(`${PATH_BASE}?${PARAM_KEY}&${PARAM_DATE}${date}`)
      .then(result => {
        // handle bad http request
        if(!result.ok) {
          this.setRandomDate();
        }
        return result.json();
      })
      .then(result => this.initAstronomicalResult(result))
      // what should happen on network error?
      .catch(error => console.log("error"));
  }

  componentDidMount() {
    this.fetchAstronomicalPic();
  }

  render() {
    const { result, isLoading, bgImg } = this.state;
    if (!result) { return null; }
    return (
      <div>
        <AstronomyPic
          result={result}
          onClick={this.buttonClicked}
          bgImg={bgImg}
        />
        { isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
