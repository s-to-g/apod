import React from 'react';
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

  render() {
    const {result} = this.props;
    return (
      <div className="InfoWrapper">
        <h2><a onClick={this.click} href="#0">{result.title}</a></h2>
        <p className={"InfoWrapper-desc " + (!this.state.isToggled && "is-invisible")}>{result.explanation}</p>
      </div>
    );
  }
}
export default InfoWrapper;
