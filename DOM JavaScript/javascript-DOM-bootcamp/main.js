const themeBtn = document.querySelector("#themeBtn")

const profileSection = document.querySelector("#profile")
const usernameDisplay = document.querySelector("#usernameDisplay")
const levelDisplay = document.querySelector("#levelDisplay")
const coinsDisplay = document.querySelector("#coinsDisplay")
const statusDisplay = document.querySelector("#statusDisplay")

const usernameInput = document.querySelector("#usernameInput")
const saveProfileBtn = document.querySelector("#saveProfileBtn")
const levelUpBtn = document.querySelector("#levelUpBtn")
const coinsBtn = document.querySelector("#coinsBtn")
const statusBtn = document.querySelector("#statusBtn")

const gameInput = document.querySelector("#gameInput")
const addGameBtn = document.querySelector("#addGameBtn")
const gameList = document.querySelector("#gameList")

const loginForm = document.querySelector("#loginForm")
const loginInput = document.querySelector("#loginInput")
const passwordInput = document.querySelector("#passwordInput")
const submit = document.querySelector("#submit")
const loginMessage = document.querySelector("#loginMessage")

const keyboardMessage = document.querySelector("#keyboardMessage")

const mouseArea = document.querySelector("#mouseArea")
const mouseMessage = document.querySelector("#mouseMessage")
const mousePosition = document.querySelector("#mousePosition")


addGameBtn.addEventListener("click", ()=>{
    const newGame = document.createElement("div")
    newGame.textContent = `Game: ${gameInput.value}`
    const br = document.createElement("br")
    const removenewGame = document.createElement("button")
    removenewGame.textContent = "Remove"

    removenewGame.addEventListener("click", ()=>{
        newGame.remove()
    })

    gameList.appendChild(newGame)
    newGame.appendChild(br)
    newGame.appendChild(removenewGame)
})



