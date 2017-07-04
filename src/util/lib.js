exports.getUDID = function() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  s4() + '-' + s4() + s4() + s4();
};

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

exports.getOfferAndFlights = (data, callback) => {
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

exports.prepareRenderData = (data, callback) => {
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

exports.convertPrice = (number) => {
  var a = number.toString().slice(0,6);
  var b = a.slice(0,3);
  var v = a.slice(3, a.length);
  var price = b + "." + v
  return price
}

exports.convertMinsToHrsMins = (minutes) => {
  var h = Math.floor(minutes / 60);
  var m = minutes % 60;
  m = m < 10 ? '0' + m : m;
  if (h === 0) {
    return m + 'm';

  }
  return h + 'h ' + m + 'm';
}

let data = {
  Flights: [],
  Legs: [],
  Offers: [],
  Segments: []
};

exports.concatinateData = (response) => {
  data.Flights = data.Flights.concat(response.Flights)
  data.Legs = data.Legs.concat(response.Legs)
  data.Offers = data.Offers.concat(response.Offers)
  data.Segments = data.Segments.concat(response.Segments)
  return data
}
