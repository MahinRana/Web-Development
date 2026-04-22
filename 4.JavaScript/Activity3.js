var userInput = prompt("Enter your text:");

var textLength = userInput.length;
var totalAllowed = 240;
var remainingChars = totalAllowed - textLength;

alert("You have entered " + textLength + " characters and you have " + remainingChars + " characters remaining.");