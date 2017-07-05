import React, { Component } from 'react';
import TicketSegment from './TicketSegment'
import Button from './../Button'
import Price from './Price'
import lib from './../../util/lib';
import PropTypes from 'prop-types';

/**
* Ticket - displays each ticket
* @prop  {object} TicketData
*/
class Ticket extends Component {
  openDeeplink = (link) => {
    window.open(link)
  }
  render() {
    return (
      <div className="c-flights_ticket">
          <div className="c-flights_ticket-container">
              <div className="c-flights_ticket-content">
                  <div className="c-flights_ticket-summary">
                      <TicketSegment
                        legs={this.props.ticketData.Leg}
                      />
                      <div className="c-flights_ticket-summary-deal">
                          <div className="c-flights_ticket-summary-deal-main">
                          <Price
                            price={lib.convertPrice(this.props.ticketData.Offer.Price)}
                            currency={this.props.ticketData.Offer.Currency}
                          />
                          </div>
                          <div className="c-flights_ticket-summary-deal-footer">
                            <Button
                              onClick={() => this.openDeeplink(this.props.ticketData.Offer.Deeplink)}
                            />
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
