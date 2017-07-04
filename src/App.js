import React, { Component } from 'react';
import Header from './components/Header';
import Ticket from './components/Ticket';
import Loader from './components/Loader';
import api from './util/api.js';
import lib from './util/lib';
import _ from 'lodash'

let data = {
  Flights: [],
  Legs: [],
  Offers: [],
  Segments: []
};

class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      data: [],
      showLoader: true
    };
  }

  getOfferAndFlights = (data, callback) => {
    data.Offers.map((offer, index) => {
      if (typeof data.Flights[offer.FlightIndex] !== 'undefined') {
        var a = data.Flights[offer.FlightIndex].Key.split('|');
        var b = a[1].split(',');
        data.Flights[offer.FlightIndex].FlightKeys = b
        let foundLegs = []
        data.Flights[offer.FlightIndex].SegmentIndexes.map((segmentId) => {
          data.Segments[segmentId].LegIndexes.map((leg, index) => {
            if (leg === segmentId) {
              foundLegs.push(data.Legs[leg]);
            }
          })
          callback(offer, data.Flights[offer.FlightIndex], data.Segments[segmentId], foundLegs);
        })
      }
    })
  }

  prepareRenderData = (data, callback) => {
    let finalData = [];
    this.getOfferAndFlights(data, (offer, flight, segment, leg) => {
      finalData.push({
        'Offer': offer,
        'Flight': flight,
        'Segment': segment,
        'Leg': leg
      });
    });
    finalData.sort((a, b) => {
      return a.Offer.Price - b.Offer.Price
    });
    callback(finalData);
  }

  concatinateData = (response) => {
    data.Flights = data.Flights.concat(response.Flights)
    data.Legs = data.Legs.concat(response.Legs)
    data.Offers = data.Offers.concat(response.Offers)
    data.Segments = data.Segments.concat(response.Segments)
    return data
  }

  componentDidMount() {
    const UDID = lib.getUDID();
    api.fetch(UDID, (response, err) => {
      if (err) {
        console.log("Error loading data: ", err);
      } else {
        this.prepareRenderData(this.concatinateData(response), (data) => {
          var uniq = _.uniqBy(data, (o) => {
            return o.Flight.Key;
          });
          this.setState({
            data: uniq,
            showLoader: false
          });
        });
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
                        <Loader show={this.state.showLoader}/>
                        {this.state.data.map((offer, index) =>
                          <Ticket ticketData={offer} key={index}/>
                        )}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default App;
