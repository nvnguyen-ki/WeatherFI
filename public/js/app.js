console.log('Client side javascript file is loaded!')

//  this gets the item that is searched on website
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// const button_rain = document.querySelector('.button-rain')

// function rain(){
//   document.body.style.background = 'url(https://data.whicdn.com/images/281328506/original.gif)';
  
// }
// button_rain.addEventListener("click", rain);
// rendering loading message and empty p

messageOne.textContent = ''
messageTwo.textContent = ''




weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value
  fetch( '/weather?address='+location).then((response,error) => {

    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
      }
    })
  })
})
