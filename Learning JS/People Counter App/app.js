let count = 0
let countEl = document.getElementById("count-el")
let saved = document.getElementById("saved-El")
function increment() {
    count += 1
    countEl.innerText = count
    
}

function save() {
    let saveNumber = count + " - " 
    saved.textContent += saveNumber
    count = 0
    countEl.innerText = count
}
