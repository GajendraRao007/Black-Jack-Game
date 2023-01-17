let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

let cardsEl = document.getElementById("cards-el")
//----------------OR----------------------

// let sumEl = document.querySelector("#sum-el")

function startGame() {
if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
}


function newCard(){
    console.log("Drawing a new card from the deck!")

    let card = 7

    sum += card

    startGame()
}

