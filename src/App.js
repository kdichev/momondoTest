import React, { Component } from 'react'
import Header from './components/Header'
import Ticket from './components/Ticket'
import Loader from './components/Loader'
import api from './util/api.js'
import lib from './util/lib'
import _ from 'lodash'

let data = {
  Flights: [],
  Legs: [],
  Offers: [],
  Segments: []
}

class App extends Component {
  constructor(props) {
  super(props)
    this.state = {
      data: [],
      loader: true
    }
  }

  concatinateData = (response) => {
    data.Flights = data.Flights.concat(response.Flights)
    data.Legs = data.Legs.concat(response.Legs)
    data.Offers = data.Offers.concat(response.Offers)
    data.Segments = data.Segments.concat(response.Segments)
    return data
  }


  getOfferAndFlights = (data, callback) => {
    data.Offers.map((offer, index) => {
      data.Flights.map((flight, index) => {
        if (offer.FlightIndex === index) {
          var foundLegs = []
          this.getSegmentsAndLegs(flight.SegmentIndexes, data.Segments, data.Legs, (leg) => {
            foundLegs.push(leg)
          })
          callback(offer, flight, foundLegs)
        }
      })
    })
  }

  getSegmentsAndLegs = (sid, segments, legs, callback) => {
    sid.map((segmentIndex) => {
      segments.map((segment, index) => {
        if (segmentIndex === index) {
          legs.map((leg, index) => {
            segment.LegIndexes.map((legIndex) => {
              if (legIndex === index) {
                callback(leg)
              }
            })
          })
        }
      })
    })
  }

  prepareRenderData  = (data, callback) => {
    let finalData = []
    this.getOfferAndFlights(data, (offer, flight, leg) => {
      console.log(finalData);
      finalData.push({
        'Offer': offer,
        'Flight': flight,
        'Leg': leg
      })
      finalData.sort((a, b) => {
        return a.Offer.Score - b.Offer.Score
      })
    })
    callback(finalData)
  }


  toggleLoader = () => {
    this.setState({loader: !this.state.loader})
  }

  componentDidMount() {
    const UDID = lib.getUDID()
    api.fetch(UDID, (response, err) => {
      if (err) {
        console.log("Error loading data: ", err)
      } else {
        this.prepareRenderData(this.concatinateData(response), (data) => {
          this.setState({
            data: data,
            loader: false
          })
        })
      }
    })
  }

  render() {
    return (
      <div className="c-app">
          <div className="c-app_developertest">
              <Header />
              <div className="c-app_developertest-body">
                  <div className="c-app_developertest-layout">
                      <div className="c-app_developertest-body-content">
                        <Loader show={this.state.loader}/>
                        {this.state.data.map((offer, index) =>
                          <Ticket ticketData={offer} key={index}/>
                        )}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default App
