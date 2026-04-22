var name = prompt("What is your name?");

var firstChar = name.slice(0, 1).toUpperCase();
var restOfName = name.slice(1, name.length).toLowerCase();

var capitalizedName = firstChar + restOfName;
alert("Hello, " + capitalizedName + "!");