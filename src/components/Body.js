import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* Loader - displays loader
* @prop  {bool} show
*/
class Body extends Component {
  render() {
    return (
      <div className="c-app_developertest-body">
          <div className="c-app_developertest-layout">
              <div className="c-app_developertest-body-content">
                {this.props.children}
              </div>
          </div>
      </div>
    );
  }
}

Body.PropTypes = {
  chrildren: PropTypes.object.isRequired
};

export default Body;
