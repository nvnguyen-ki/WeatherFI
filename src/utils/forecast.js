
const request = require('request')
const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/2665ac2d0b3bd1165fe22b16d94f3d99/' + latitude +','+longitude
  request( {url, json: true}, (error, {body}) => {
    if (error) {
      callback('connection error', undefined)
    } else if (body.error){
      callback('location error', undefined)
    } else {
      callback(undefined, {
        dataSum: 'Current Forecast: Possible ' + body.currently.icon + '. Currently ' + body.currently.temperature + ' degree fahrenheit. '
        + body.daily.data[0].summary,
        singleData: body.currently.icon,
        windspeed: 'With a windspeed of : '+body.currently.windSpeed + 'mph',
        singlewindSpeed: body.currently.windSpeed,
        highlow: 'High: ' + body.daily.data[0].temperatureHigh + '/ Low: ' + body.daily.data[0].temperatureLow,
        week: 'Weekly Forcast: ' + body.daily.summary,
        TommorowIcon: body.daily.data[2].icon,
        Tommorow: 'Tommorow: High: ' + body.daily.data[1].temperatureHigh + '/ Low: ' + body.daily.data[1].temperatureLow + ' Forecast: ' + body.daily.data[1].summary,
        next: 'Day after tommorow: High: ' + body.daily.data[2].temperatureHigh + '/ Low: ' + body.daily.data[2].temperatureLow +   ' Forecast: ' + body.daily.data[2].summary,
        afternext: 'Day after Day Before: High: ' + body.daily.data[3].temperatureHigh + '/ Low: ' + body.daily.data[3].temperatureLow +   ' Forecast: ' + body.daily.data[3].summary

      })
    }
  })
}
module.exports = forecast
