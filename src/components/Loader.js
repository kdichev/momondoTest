import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* Loader - displays loader
* @prop  {bool} show
*/
class Loader extends Component {
  render() {
    return (
      <div style={{width: "100%", textAlign: "center"}}>
        {this.props.show &&
          <img
            src="https://cdn.momondo.net/assets/temporary/travel-saver-calendar/wheel.gif"
            width="30px"
            height="30px"
            alt="presentation"
          />
        }
      </div>
    );
  }
}

Loader.propTypes = {
  show: PropTypes.bool.isRequired
};

export default Loader;
