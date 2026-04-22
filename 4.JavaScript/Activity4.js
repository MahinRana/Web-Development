var userInput = prompt("Enter your text:");

var slicedText = userInput.slice(0, 100);

var textLength = userInput.length;
var totalAllowed = 240;
var remainingChars = totalAllowed - textLength;

alert(slicedText);