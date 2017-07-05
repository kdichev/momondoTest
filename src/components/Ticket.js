import React, { Component } from 'react';
import TicketSegment from './TicketSegment'
import lib from './../util/lib';
import PropTypes from 'prop-types';

/**
* Ticket - displays each ticket
* @prop  {object} TicketData
*/
class Ticket extends Component {
  constructor(props) {
  super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover = () => {
    this.setState({hover: !this.state.hover})
  }

  openDeeplink = (link) => {
    window.open(link)
  }

  render() {
    var linkStyle;
    if (this.state.hover) {
      linkStyle = {backgroundColor: '#2fd693'}
    } else {
      linkStyle = {backgroundColor: '#2ca179'}
    }
    return (
      <div className="c-flights_ticket">
          <div className="c-flights_ticket-container">
              <div className="c-flights_ticket-content">
                  <div className="c-flights_ticket-summary">
                      <TicketSegment legs={this.props.ticketData.Leg}/>
                      <div className="c-flights_ticket-summary-deal">
                          <div className="c-flights_ticket-summary-deal-main">
                              <div className="c-flights_ticket-summary-deal-prices">
                                  <div className="c-flights_ticket-summary-deal-price c-flights_ticket-summary-deal-price--single">
                                    {lib.convertPrice(this.props.ticketData.Offer.Price)}&nbsp;
                                    {this.props.ticketData.Offer.Currency}
                                  </div>
                              </div>
                          </div>
                          <div className="c-flights_ticket-summary-deal-footer">
                              <div
                                className="c-flights_ticket-summary-deal-button c-button c-push_button"
                                onClick={() => this.openDeeplink(this.props.ticketData.Offer.Deeplink)}>
                                  <div className="c-button-layers">
                                      <div className="c-button-outline"></div>
                                      <div className="c-button-fill" style={linkStyle}></div>
                                  </div>
                                  <div
                                    className="c-button-content"
                                    style={{color: "white"}}
                                    onMouseEnter={this.toggleHover}
                                    onMouseLeave={this.toggleHover}>
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

Ticket.propTypes = {
  ticketData: PropTypes.object.isRequired
};

export default Ticket;
