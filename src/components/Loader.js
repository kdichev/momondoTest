import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div style={{width: "100%", textAlign: "center"}}>
        {this.props.show &&
          <img src="https://cdn.momondo.net/assets/temporary/travel-saver-calendar/wheel.gif" width="30px" height="30px"/>
        }
      </div>
    );
  }
}

export default Loader;
