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
    //leg = [0,1]
    finalData.push({
      'Offer': offer,
      'Flight': flight,
      'Segment': segment,
      'Leg': leg
    });
  });
  // find Legs match from Flight Keys
  // add Legs match to FinalData
  finalData.sort((a, b) => {
    return a.Offer.Price - b.Offer.Price
  });
  callback(finalData);
}
