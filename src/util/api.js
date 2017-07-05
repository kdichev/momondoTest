
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const TARGET_URL = 'http://momondodevapi.herokuapp.com/api/1.0/FlightSearch/'

exports.fetch = (UDID, callback) => {
  fetch(PROXY_URL + TARGET_URL + UDID)
    .then(blob => blob.json())
    .then(response => {
      callback(response)
      if (response.Done === true) {
        return
      }
      this.fetch(UDID, callback);
    })
    .catch(err => {
      callback(err)
    });
};
