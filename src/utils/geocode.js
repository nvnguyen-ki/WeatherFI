const request = require('request')
//  geocode with callback
const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibnZuZ3V5ZW4iLCJhIjoiY2p2cTN5czI3MDhrODQzbXE3cXRsb3R1ciJ9.p5tQOJKGbimYkGqGlgnH3w'
  request({ url, json: true}, (error, {body}) => {
    if (error) {
      callback('unable to connect to location services!', undefined)
    } else if(body.features.length===0) {
        callback('unable to find location. try another search', undefined)
    } else {
        callback(undefined, {
          latitude: body.features[0].center[1],
          longitude: body.features[0].center[0],
          location: body.features[0].place_name
        })
    }
  })
}



module.exports = geocode
