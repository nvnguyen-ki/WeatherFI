
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
        data: 'it seems to be ' + body.currently.summary + '. Currently at a whopping ' + body.currently.temperature + ' degree fahrenheit. ' +'<\b\r\>'
        + 'Another useful information: It has been '+ body.daily.data[0].summary
      }
      )
    }
  })
}
module.exports = forecast
