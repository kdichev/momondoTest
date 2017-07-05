import React, { Component } from 'react';
import PropTypes from 'prop-types';
/**
* Price - opens link
*
*/
class Price extends Component {
  constructor(props) {
  super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="c-flights_ticket-summary-deal-prices">
        <div className="c-flights_ticket-summary-deal-price c-flights_ticket-summary-deal-price--single">
          {this.props.price}&nbsp;
          {this.props.currency}
        </div>
      </div>
    );
  }
}

Price.propTypes = {
  price: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
};

export default Price;
