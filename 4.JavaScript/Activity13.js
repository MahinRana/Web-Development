let guestsList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
let guestname = prompt("What is your name?");
if (guestsList.includes(guestname)) {
    alert("Welcome, " + guestname + "!");
} else {
    alert("Sorry, " + guestname + ". Maybe next time.");
}