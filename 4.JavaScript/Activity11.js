var name1 = prompt("Enter your name");
var name2 = prompt("Enter your friend name");

var friendshipScore = Math.round(Math.random() * 100)+1;
var message = "";
if (friendshipScore >= 80) {
    message = "Marvelous";
} else if (friendshipScore >= 60) {
    message = "Very Good";
} else if (friendshipScore >= 40) {
    message = "Not Bad";
} else {
    message = "Too Bad!";
}

alert("Your Friendship Score is " + friendshipScore + "%: " + message);