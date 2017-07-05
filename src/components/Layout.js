import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* Loader - displays loader
* @prop  {bool} show
*/
class Layout extends Component {
  render() {
    return (
      <div className="c-app">
          <div className="c-app_developertest">
            {this.props.children}
          </div>
      </div>
    );
  }
}

Layout.PropTypes = {
  chrildren: PropTypes.object.isRequired
};

export default Layout;
