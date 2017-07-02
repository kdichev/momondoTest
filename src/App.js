import React, { Component } from 'react';
import Header from './components/Header';
import Ticket from './components/Ticket';
import lib from './util/lib';

class App extends Component {
  componentWillMount() {
    const UDID = lib.getUDID();
    console.log(UDID);
  }
  render() {
    return (
      <div className="c-app">
          <div className="c-app_developertest">
              <Header />
              <div className="c-app_developertest-body">
                  <div className="c-app_developertest-layout">
                      <div className="c-app_developertest-body-content">
                        <Ticket />
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
