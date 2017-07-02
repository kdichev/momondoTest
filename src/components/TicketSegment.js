import React, { Component } from 'react';
class TicketSegment extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="c-flights_ticket-summary-content">
          <div className="c-flights_ticket-summary-header"></div>
          <div className="c-flights_ticket-summary-segments">
                <div>
                  <div className="c-flights_ticket-summary-segment">
                      <div className="c-flights_ticket-summary-segment-carriers" style={{width: 64}}>
                          SAS
                      </div>
                      <div className="c-flights_ticket-summary-segment-location c-flights_ticket-summary-segment-location--origin">
                          <div className="c-flights_ticket-summary-segment-iata_time">
                              <div className="c-flights_ticket-summary-segment-iata">CPH</div>
                              <div className="c-flights_ticket-summary-segment-time">12:25</div>
                          </div>
                          <div className="c-flights_ticket-summary-segment-place">Copenhagen</div>
                      </div>
                      <div className="c-flights_ticket-summary-segment-route">
                          <div className="c-flights_ticket_route">
                              <div className="c-flights_ticket_route-container">
                                  <div className="c-flights_ticket_route-duration">12h 05m</div>
                                  <div className="c-flights_ticket_route-stops">
                                      <svg className="c-flights_ticket_route-stops-svg" width="100%" height="20" focusable="false">
                                          <line className="c-flights_ticket_route-stops-svg-line" x1="2" y1="3" x2="100%" y2="3" strokeWidth="2" transform="translate(-1)" style={{stroke: "black", opacity: "0.2"}}/>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="c-flights_ticket-summary-segment-location c-flights_ticket-summary-segment-location--destination">
                          <div className="c-flights_ticket-summary-segment-iata_time">
                              <div className="c-flights_ticket-summary-segment-iata">15:50</div>
                              <div className="c-flights_ticket-summary-segment-time">SFO</div>
                          </div>
                          <div className="c-flights_ticket-summary-segment-place">San Francisco</div>
                      </div>
                  </div>
                </div>
                <div>
                  <div className="c-flights_ticket-summary-segment">
                      <div className="c-flights_ticket-summary-segment-carriers" style={{width: 64}}>
                          SAS
                      </div>
                      <div className="c-flights_ticket-summary-segment-location c-flights_ticket-summary-segment-location--origin">
                          <div className="c-flights_ticket-summary-segment-iata_time">
                              <div className="c-flights_ticket-summary-segment-iata">SFO</div>
                              <div className="c-flights_ticket-summary-segment-time">12:25</div>
                          </div>
                          <div className="c-flights_ticket-summary-segment-place">Copenhagen</div>
                      </div>
                      <div className="c-flights_ticket-summary-segment-route">
                          <div className="c-flights_ticket_route">
                              <div className="c-flights_ticket_route-container">
                                  <div className="c-flights_ticket_route-duration">12h 05m</div>
                                  <div className="c-flights_ticket_route-stops">
                                      <svg className="c-flights_ticket_route-stops-svg" width="100%" height="20" focusable="false">
                                          <line className="c-flights_ticket_route-stops-svg-line" x1="2" y1="3" x2="100%" y2="3" strokeWidth="2" transform="translate(-1)" style={{stroke: "black", opacity: "0.2"}}/>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="c-flights_ticket-summary-segment-location c-flights_ticket-summary-segment-location--destination">
                          <div className="c-flights_ticket-summary-segment-iata_time">
                              <div className="c-flights_ticket-summary-segment-iata">18:45</div>
                              <div className="c-flights_ticket-summary-segment-time">CPH</div>
                          </div>
                          <div className="c-flights_ticket-summary-segment-place">San Francisco</div>
                      </div>
                  </div>
                </div>
          </div>
      </div>
    );
  }
}

export default TicketSegment;
