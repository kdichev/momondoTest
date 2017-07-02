import React, { Component } from 'react';

class Ticket extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="c-flights_ticket">
          <div className="c-flights_ticket-container">
              <div className="c-flights_ticket-content">
                  <div className="c-flights_ticket-summary">
                      <div className="c-flights_ticket-summary-deal">
                          <div className="c-flights_ticket-summary-deal-main">
                              <div className="c-flights_ticket-summary-deal-prices">
                                  <div className="c-flights_ticket-summary-deal-price c-flights_ticket-summary-deal-price--single">
                                    333,333 HUF
                                  </div>
                              </div>
                          </div>
                          <div className="c-flights_ticket-summary-deal-footer">
                              <div className="c-flights_ticket-summary-deal-button c-button c-push_button">
                                  <div className="c-button-layers">
                                      <div className="c-button-outline"></div>
                                      <div className="c-button-fill"></div>
                                  </div>

                                  <div className="c-button-content" style={{color: "white"}}>
                                      Book
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Ticket;
