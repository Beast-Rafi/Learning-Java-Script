let firstCard = 2
let secondCard = 11
let hasBlackJack = false
let cards = [firstCard , secondCard]
let isAlive = true
let message
let sum = firstCard + secondCard
let msgEl = document.getElementById("msg-El")
let sumEl = document.getElementById("sum-El")
let cardsEl = document.getElementById("cards-El")

function startGame() {
    renderGame()
}

function renderGame() {
    sumEl.textContent += sum
    cardsEl.textContent += " " + cards[0] + " " + cards[1]

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
    let thirdCard = 4
    cards.push(thirdCard)
    sum = sum + thirdCard + " "
    cardsEl.textContent += sum
    renderGame()
}
