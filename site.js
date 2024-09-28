const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

let welcome; //message box variable

if(isMorning) { //checks time then assigns appropriate message to variable
    welcome = "Good morning!"
}
else if(isAfternoon) {
    welcome = "Good afternoon!"
}
else if(isEvening) {
    welcome = "Good evening!"
}

//connect to div and display welcome message

document.getElementById('welcome').innerHTML = welcome

//add a 'secret' message to the local storage using the key "It's a secret to everybody."

const secretMessage = "I'm bad at Zelda games"
const key = "It's a secret to everybody."

//save to local storage
localStorage.setItem(key, secretMessage)

//alert('test')