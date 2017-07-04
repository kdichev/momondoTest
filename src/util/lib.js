exports.getUDID = function() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
  s4() + '-' + s4() + s4() + s4();
};

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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
