import React, { Component } from 'react';
import Header from './components/Header';
import Ticket from './components/Ticket';
import api from './util/api.js';
import lib from './util/lib';

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const UDID = lib.getUDID();
    api.fetch(UDID, (response, err) => {
      if (err) {
        console.log("Error loading data: ", err);
      } else {
        console.log("Recieved Data: ", response);
      }
    });
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
