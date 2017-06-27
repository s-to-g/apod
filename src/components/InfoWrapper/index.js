import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import './InfoWrapper.css';

class InfoWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      isToggled: false
    };
    this.click = this.click.bind(this);
  }

  click(event) {
    event.preventDefault();
    let isToggled = this.state.isToggled;
    this.setState({
      isToggled: !isToggled
    });
  }

  componentWillReceiveProps(nextProps) {
      this.setState({isToggled:false});
  }

  render() {
    const {result} = this.props;
    const s = this.state;
    let iconToggleClass = !s.isToggled ? '' : ' is-toggled';
    return (
      <div className="InfoWrapper">
        <h2 className="InfoWrapper-title">
          {result.title}
        </h2>
        <div className={"InfoWrapper-descWrapper" + (!this.state.isToggled ? " is-invisible" : "")}>
          <p className="InfoWrapper-desc">{result.explanation}</p>
        </div>
        <a onClick={this.click} href="#0">
          <Icon name="arrow-down" classes={`InfoWrapper-icon InfoWrapper-icon--arrow ${iconToggleClass}`} />
          <Icon name="underline" classes={`InfoWrapper-icon InfoWrapper-icon--underline ${iconToggleClass}`} />
        </a>
      </div>
    );
  }
}

InfoWrapper.propTypes = {
  result: PropTypes.object.isRequired,
  bgImg: PropTypes.string.isRequired
}


export default InfoWrapper;
