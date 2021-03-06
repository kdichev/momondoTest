import React, { Component } from 'react';
import lib from './../../util/lib';
import PropTypes from 'prop-types';

//var stoOvers = []

/**
* TicketSegment - displays each ticket segment
* @prop  {array} legs of objects
*
*/
class TicketSegment extends Component {
  componentWillMount() {
    // if (this.props.legs.length > 2) {
    //   stoOvers.push(this.props.legs.shift())
    //   stoOvers.push(this.props.legs.pop())
    //   console.log(stoOvers);
    // }
  }
  render() {
    return (
      <div className="c-flights_ticket-summary-content">
          <div className="c-flights_ticket-summary-header"></div>
          <div className="c-flights_ticket-summary-segments">
            {this.props.legs.map((leg, index) =>
              <div key={index}>
                  <div className="c-flights_ticket-summary-segment">
                      <div className="c-flights_ticket-summary-segment-carriers" style={{width: 64}}>
                          {leg.AirlineName.split(' ')[0]}
                      </div>
                      <div className="c-flights_ticket-summary-segment-location c-flights_ticket-summary-segment-location--origin">
                          <div className="c-flights_ticket-summary-segment-iata_time">
                              <div className="c-flights_ticket-summary-segment-iata">{leg.OriginIata}</div>
                              <div className="c-flights_ticket-summary-segment-time">{lib.formatDate(new Date(leg.Departure))}</div>
                          </div>
                          <div className="c-flights_ticket-summary-segment-place">{leg.OriginDisplayName.split(',')[0]}</div>
                      </div>
                      <div className="c-flights_ticket-summary-segment-route">
                          <div className="c-flights_ticket_route">
                              <div className="c-flights_ticket_route-container">
                                  <div className="c-flights_ticket_route-duration">{lib.convertMinsToHrsMins(leg.Duration)}</div>
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
                              <div className="c-flights_ticket-summary-segment-iata">{lib.formatDate(new Date(leg.Arrival))}</div>
                              <div className="c-flights_ticket-summary-segment-time">{leg.DestinationIata}</div>
                          </div>
                          <div className="c-flights_ticket-summary-segment-place">{leg.DestinationDisplayName.split(',')[0]}</div>
                      </div>
                  </div>
                </div>
              )}
          </div>
      </div>
    );
  }
}

TicketSegment.propTypes = {
  legs: PropTypes.arrayOf(PropTypes.shape({
     AirlineName: PropTypes.string.isRequired,
     OriginIata: PropTypes.string.isRequired,
     Departure: PropTypes.string.isRequired,
     OriginDisplayName: PropTypes.string.isRequired,
     Duration: PropTypes.number.isRequired,
     Arrival: PropTypes.string.isRequired,
     DestinationIata: PropTypes.string.isRequired,
     DestinationDisplayName: PropTypes.string.isRequired,
   })).isRequired,
};

export default TicketSegment;
