
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const TARGET_URL = 'http://momondodevapi.herokuapp.com/api/1.0/FlightSearch/'
let data = {
  Flights: [],
  Legs: [],
  Offers: [],
  Segments: []
};

exports.fetch = (UDID, callback) => {
  fetch(PROXY_URL + TARGET_URL + UDID)
    .then(blob => blob.json())
    .then(response => {
      console.log(data);
      data.Flights = data.Flights.concat(response.Flights)
      data.Legs = data.Legs.concat(response.Legs)
      data.Offers = data.Offers.concat(response.Offers)
      data.Segments = data.Segments.concat(response.Segments)
      if (response.Done === true) {
        callback(data);
      } else {
        this.fetch(UDID, callback)
      }
    })
    .catch(err => {
      callback(err)
    });
};
