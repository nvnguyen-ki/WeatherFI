
//  this gets the item that is searched on website
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
messageOne.textContent = ''
messageTwo.textContent = ''
messageThree.textContent = ''



weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  fetch( '/weather?address='+location).then((response,error) => {

    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast.dataSum
      messageThree.textContent = data.forecast.windspeed
      // changes atmosphere depending on weather at location
      if(data.forecast.singleData == 'wind') {
        document.querySelector(".main-content").style.background = 'url(https://i.pinimg.com/originals/ac/f3/0e/acf30ee54206580bca0cb291eab559f4.gif)';
        document.querySelector(".main-content").style.backgroundSize = 'cover';
        document.querySelector(".main-content").style.backgroundPosition = 'center';
        document.getElementById("songsrc").src = 'audio/windy.mp3';
      }
      if(data.forecast.singleData == 'clear-day' || data.forecast.singleData == 'clear-night') {
        document.querySelector(".main-content").style.background = 'url(https://data.whicdn.com/images/140771342/original.gif)';
        document.querySelector(".main-content").style.backgroundSize = 'cover';
        document.querySelector(".main-content").style.backgroundPosition = 'center';
        document.getElementById("songsrc").src = 'audio/true-sunny.mp3';
      }
      if(data.forecast.singleData == 'rain') {
        document.querySelector(".main-content").style.background = 'url(https://data.whicdn.com/images/281328506/original.gif)';
        document.querySelector(".main-content").style.backgroundSize = 'cover';
        document.querySelector(".main-content").style.backgroundPosition = 'center';
        document.getElementById("songsrc").src = 'audio/lofiloop.mp3';
      }

      if(data.forecast.singleData == 'cloudy' || data.forecast.singleData == 'partly-cloudy-day' || data.forecast.singleData == 'partly-cloudy-night') {
        document.querySelector(".main-content").style.background = 'url(https://media.giphy.com/media/lnq52t8atIw3m/giphy.gif)';
        document.querySelector(".main-content").style.backgroundSize = 'cover';
        document.querySelector(".main-content").style.backgroundPosition = 'center';
        document.getElementById("songsrc").src = 'audio/sunny-song.mp3';
        
      }
      if(data.forecast.singleData == 'snow') {
        document.querySelector(".main-content").style.background = 'url(https://media.giphy.com/media/IrWhoTEN1Xr44/giphy.gif)';
        document.querySelector(".main-content").style.backgroundSize = 'cover';
        document.querySelector(".main-content").style.backgroundPosition = 'center';
        document.getElementById("songsrc").src = 'audio/snow2.mp3';
      }
      }
    })
  })
})
