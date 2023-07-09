const request = require('request');
const forecast = (latitude, longitude, callback) => {
  const apiKey = '188dd905c9cfaff32792f4de02f51d39';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.cod && body.message) {
      callback('Unable to find location', undefined);
    } else {
      const temperature = body.main.temp;
      const weatherDescription = body.weather[0].description;
      const humidity = body.main.humidity;

      const forecastMessage = `The weather is ${weatherDescription}. The temperature is ${temperature}°C. The humidity is ${humidity}%.`;
      callback(undefined, forecastMessage);
    }
  });
};

module.exports = forecast;
