const request = require('request')

const geocode = (address, callback) => {
    const request = require('request');

    const accessKey = '51423678829ddb1abed6fffa1787d226';

    const url = `https://api.weatherstack.com/forecast?access_key=${accessKey}&query=${address}`;

request({ url, json: true }, (error, { body }) => {
  if (error) {
    callback('Unable to connect to the weather service!', undefined);
  } else if (body.error) {
    callback('Unable to find location. Try another search.', undefined);
  } else {
    const latitude = body.location.lat;
    const longitude = body.location.lon;
    const location = body.location.name;

    callback(undefined, {
      latitude,
      longitude,
      location
    });
  }
});

}

module.exports = geocode
