import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
* Button - opens link
*
*/
class Button extends Component {
  constructor(props) {
  super(props);
    this.state = {
      hover: false
    };
  }


  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {backgroundColor: '#2fd693'}
    } else {
      linkStyle = {backgroundColor: '#2ca179'}
    }
    return (
      <div
        className="c-flights_ticket-summary-deal-button c-button c-push_button"
        onClick={this.props.onClick} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <div className="c-button-layers">
              <div className="c-button-outline"></div>
              <div className="c-button-fill" style={linkStyle}></div>
          </div>
          <div
            className="c-button-content"
            style={{color: "white"}}>
              Book
          </div>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
