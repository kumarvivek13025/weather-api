const request = require('request');

const geocode = (address, callback) => {
  const apiKey = '188dd905c9cfaff32792f4de02f51d39';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(address)}&appid=${apiKey}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to the weather service!', undefined);
    } else if (body.cod && body.message) {
      callback('Unable to find location. Try another search.', undefined);
    } else {
      const latitude = body.coord.lat;
      const longitude = body.coord.lon;
      const location = body.name;

      callback(undefined, {
        latitude,
        longitude,
        location
      });
    }
  });
};

module.exports = geocode;
