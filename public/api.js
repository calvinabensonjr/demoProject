const stripe = require('stripe')('pk_test_UbHE3eVfQK5uIIoXCSsEaQxt00aJjlvx9v');


document.querySelector("button").addEventListener('click', (e) => {
  stripe()
})

document.querySelector("input").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    stripe()
  }
})
const ul = document.querySelector('ul')
const item = document.querySelector("#addInput").value

function stripe(){
  let userAnswer = document.querySelector("input").value
  fetch(`https://api.stripe.com/`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log()
    


    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
