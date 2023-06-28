// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.querySelector('#modal');

modal.className = "hidden";

const buttons = document.getElementsByClassName('like-glyph');

for(let button of buttons){
  button.addEventListener('click', event => {
    let button = event.target;
    event.preventDefault();
    mimicServerCall()
    .then(data => {
      button.className = "activated-heart";
      console.log(data)
    })
    .catch(() => {
      button.className = ""
      modal.className = ""
      setTimeout(function(){
        modal.className = "hidden"
      }, 3000);
      console.log("ERROR");
    })
  })
};



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
