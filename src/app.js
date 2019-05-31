const express = require('express')
const path = require('path')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const React = require('react')
const ReactDOM = require('react-dom')



// using hbs npm
const hbs = require('hbs')
// accessing heroku port
const port = process.env.PORT || 3000

// define paths for express configa
const viewsPath = path.join(__dirname, '../templates/views')
const app = express()
const partialPath = path.join(__dirname, '../templates/partials')
// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// getting resource at url
// using path to go to public dir that has the index.html
// going to /index.html would lead to html code into website
const publicDirPath = path.join(__dirname, '../public')
app.use(express.static(publicDirPath))
app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather.Lofi',
  name: 'listen to some lofi'
  }) //use render for hbs
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: '[Unknown]',
    name: ''
  }) //use render for hbs
})

app.get('/help', (req, res) => {
  res.render('help', {
    title: '[Unknown]',
    helptext: '',
    name: ''
  }) //use render for hbs
})




// if typed in url with /weather, data below is shown
app.get('/weather', (req, res) => {
  if(!req.query.address) {
    return res.send({
      error: "please provide an address"
    })
  } else {
    address = req.query.address;
    geocode(address, (error, {latitude, longitude, location} = {}) => {
      if (address === undefined) {
        return console.log('please provide location')
      }
      if (error) {
        return res.send({error})
      } else {
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({error})
        }
        res.send({
          forecast: forecastData,
          location: location,
          address: req.query.address
        })


      })
     }
    })
  }

})


app.get('/help/*', (req,res) => {
  res.render('404page',{
    title: 404,
  error: 'help article not found'})
})

// 404 page should be at the end cause we want to check previous request
app.get('*', (req, res) => {
  res.render('404page', {
      title: 404,
  error: 'page not found'})
})

app.listen(port, () => {
  console.log('server is up on port ' + port)
})
