console.log('Client side javascript file is loaded!')

//  this gets the item that is searched on website
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// rendering loading message and empty p

messageOne.textContent = 'Loading...'
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
