import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue, remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-c4a0c-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListDB = ref(database, "shoppingList")

const btnEl = document.getElementById("add-btn")
const inputEl = document.getElementById("input-field")
const shoppingListEl = document.getElementById('shoppingList')


btnEl.addEventListener("click", function() {
    let inputValue = inputEl.value
    push(shoppingListDB, inputValue)
    clearInputField()
})

onValue(shoppingListDB, function(snapshot) {
    if(snapshot.exists()){
        let cartItemArr = Object.entries(snapshot.val())
        // let cartItemKey = Object.keys(snapshot.val())
        // console.log(cartItemKey)
        clearShoppinglistEl()
        for(let i = 0;i < cartItemArr.length; i++) {
            let currentItem = cartItemArr[i]
            let currentItemID = currentItem[0]
            let currentItemValues = currentItem[1]
            appendShoppingListEL(currentItem)
        }
    }else {
        shoppingListEl.innerHTML = "No Items here ....yet"
    }


})

function appendShoppingListEL(item) {
    let li = document.createElement('li')
    let itemId = item[0]
    let itemValue = item[1]
    li.textContent = itemValue
    shoppingListEl.append(li)

    li.addEventListener('dblclick', function() {
        let locationOfItem = ref(database, `shoppingList/${itemId}`)
        remove(locationOfItem)        
    })
}


function clearInputField() {
    inputEl.value = ""
}

function clearShoppinglistEl() {
    shoppingListEl.innerHTML = ""
}
