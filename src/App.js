import React, { Component } from 'react'
import Header from './components/Header'
import Ticket from './components/Ticket/'
import Loader from './components/Loader'
import Layout from './components/Layout'
import Body from './components/Body'
import api from './util/api.js'
import lib from './util/lib'

let data = {
  Flights: [],
  Legs: [],
  Offers: [],
  Segments: []
}

/**
* App - component description
*
*
*/

export default class App extends Component {
  constructor(props) {
  super(props)
    this.state = {
      data: [],
      loader: true
    }
  }

  // TODO: fix the way data is concatinated
  concatinateData = (response) => {
    data.Flights = data.Flights.concat(response.Flights)
    data.Legs = data.Legs.concat(response.Legs)
    data.Offers = data.Offers.concat(response.Offers)
    data.Segments = data.Segments.concat(response.Segments)
    return data
    //return response
  }

  /**
  * getOfferAndFlights - map Offers according to flight indexes
  *
  * @param  {object} data description
  * @return {func} callback description
  */
  getOfferAndFlights = (data, callback) => {
    data.Offers.map((offer, index) =>
      data.Flights.map((flight, index) => {
        if (offer.FlightIndex === index) {
          let legs = []
          this.getSegmentsAndLegs(flight.SegmentIndexes, data.Segments, data.Legs, (leg) =>
            legs.push(leg)
          )
          return callback(offer, flight, legs)
        }
        return false
      })
    )
  }

  /**
  * getSegmentsAndLegs - map legs according to segment indexes
  *
  * @param  {object} sid description
  * @param  {object} segments description
  * @param  {object} legs description
  * @return {func} callback description
  */
  getSegmentsAndLegs = (sid, segments, legs, callback) => {
    sid.map((segmentIndex) =>
      segments.map((segment, index) => {
        if (segmentIndex === index) {
          legs.map((leg, index) => {
            segment.LegIndexes.map((legIndex) => {
              if (legIndex === index) {
                return callback(leg)
              }
              return false
            })
            return false
          })
        }
        return false
      })
    )
  }

  /**
  * prepareRenderData - description
  *
  * @param  {object} data each offer and all of its related data
  * @return {func} callback used to handle response
  */
  prepareRenderData  = (data, callback) => {
    let finalData = []
    this.getOfferAndFlights(data, (offer, flight, leg) => {
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

  /**
  * componentDidMount - Create UDID and pass it to get data with fetch
  *
  */
  componentDidMount() {
    const UDID = lib.getUDID()
    api.fetch(UDID, (response, err) => {
      if (err) {
        console.log("Error loading data: ", err)
      } else if (lib.isEmptyObject(response)) {
        this.prepareRenderData(this.concatinateData(response), (data) => {
          this.setState({
            data: data,
            loader: false
          })
        })
      }
    })
  }

  toggleLoader = () => {
    this.setState({loader: !this.state.loader})
  }

  render() {
    return (
      <Layout>
        <div>
          <Header />
          <Body>
            <div>
              <Loader show={this.state.loader}/>
              {this.state.data &&
                this.state.data.map((offer, index) =>
                  <Ticket ticketData={offer} key={index}/>
                )
              }
            </div>
          </Body>
        </div>
      </Layout>
    )
  }
}
