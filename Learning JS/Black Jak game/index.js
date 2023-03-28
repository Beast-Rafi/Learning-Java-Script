let firstCard = 2
let secondCard = 11
let hasBlackJack = false
let isAlive = true
let message
let sum = firstCard + secondCard
let msgEl = document.getElementById("msg-El")
//let sumEl = document.getElementById("sum-El")
let sumEl = document.querySelector("#sum-El")

function start() {
    sumEl.textContent += sum

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

