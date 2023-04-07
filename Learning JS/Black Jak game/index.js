let player = {
    name: "Fahim Shakil",
    chip: 145
}

let hasBlackJack = false
let cards = []
let isAlive = false
let message
let sum = 0
// -----------------------Getting Items From Dom--------------------------//
let msgEl = document.getElementById("msg-El")
let sumEl = document.getElementById("sum-El")
let cardsEl = document.getElementById("cards-El")
let playerEl = document.getElementById("player-El")


playerEl.innerText = player.name + ": $" + player.chip

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard)
    sum = firstCard + secondCard


    renderGame()
}

function getRandomCard() {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 11) {
        return 10
    } else {
        return randomNumber
    }
         
}

function renderGame() {
    sumEl.textContent ="Sum: " + sum
    cardsEl.textContent = "Cards: " 
    for (i = 0; i < cards.length; i ++) {
        cardsEl.textContent += cards[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to roll a new card?"
    }
    else if (sum === 21) {
        message = "You have won the game!!!!!!!"
        hasBlackJack = true
    }
    else {
        message ="You're out of the game"
        isAlive = false
    }   
    msgEl.textContent = message
}

function newCard() {
    let thirdCard = getRandomCard()
    if (isAlive === true && hasBlackJack === false) {
        cards.push(thirdCard)
        sum += thirdCard
        renderGame()
    }
}
