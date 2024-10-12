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


//image carousel--
const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })

    //increment when currentImage is called
    currentImage++ 
}

//next button function
const nextImage = () => {
    currentImage++
    showImages()
}

//prev button function
const prevImage = () => {
    currentImage--
    showImages()
}

showImages()

//change picture every 5 seconds

setInterval(showImages, 5000)

//next button event
document.getElementById('next').addEventListener('click', () => {
    nextImage()
})

//prev button event
document.getElementById('prev').addEventListener('click', () =>{
    prevImage()
})


//alert('test')

