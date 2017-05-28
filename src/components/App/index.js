import React from 'react';
import AstronomyPic from '../AstronomyPic';
import InfoWrapper from '../InfoWrapper';
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
      date: DEFAULT_DATE
    };
    this.fetchAstronomicalPic = this.fetchAstronomicalPic.bind(this);
    this.setAstronomicalPic = this.setAstronomicalPic.bind(this);
    this._getRandomDate = this._getRandomDate.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  _getRandomDate() {
    let date = Date.now();
    return date;
  }

  buttonClicked(e) {
    e.preventDefault();
    this.setState({date: "2016-02-03"}, () => this.fetchAstronomicalPic(this.state.date));
    let date = this._getRandomDate(this.state.date);
  }

  setAstronomicalPic(result) {
    console.log(result);
    this.setState({
      result: result,
      isLoading: false
    });
  }

  fetchAstronomicalPic(date = this.state.date) {
    console.log(date);
    this.setState({ isLoading: true });
    fetch(`${PATH_BASE}?${PARAM_KEY}&${PARAM_DATE}${date}`)
      .then(response => response.json())
      .then(result => this.setAstronomicalPic(result));
      // HANDLE NETWORK ERROR
  }

  componentDidMount() {
    this.fetchAstronomicalPic();
  }

  render() {
    const { result, isLoading } = this.state;
    if (!result) { return null; }
    return (
      <div>
        <AstronomyPic result={result} onClick={this.buttonClicked}/>
        <InfoWrapper result={result} />
        { isLoading && <Loader />}
      </div>
    );
  }
}

export default App;
