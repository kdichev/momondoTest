
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const TARGET_URL = 'http://momondodevapi.herokuapp.com/api/1.0/FlightSearch/'
let data;

exports.fetch = (UDID, callback) => {
  fetch(PROXY_URL + TARGET_URL + UDID)
    .then(blob => blob.json())
    .then(response => {
      if (response.ResultNumber === 0) {
        data = response;
      }
      if (response.Done === true) {
        data.Done = response.Done
        callback(data);
      } else {
        this.fetch(UDID, callback)
      }
    })
    .catch(err => {
      callback(err)
    });
};
