// 1. Access all buttons with the class "drum"
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  // 2. Add Event Listener for Mouse Clicks
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
  });
}

// 3. Add Event Listener for Keyboard Presses
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


// 4. Function to play sound based on the key/character
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default: console.log(key);
  }
}

// 5. Function to add the 'pressed' animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  
  if (activeButton) {
    activeButton.classList.add("pressed");

    // Remove the class after 100 milliseconds to create a flash effect
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}