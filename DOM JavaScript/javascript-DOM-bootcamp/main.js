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

const LoginSection = document.querySelector("#LoginSection")




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




let currentlevelDisplay = 1
levelUpBtn.addEventListener("click", ()=>{
    currentlevelDisplay += 1
    levelDisplay.textContent = `Level: ${currentlevelDisplay}`
})




let currentcoinsDisplay = 0
coinsBtn.addEventListener("click", ()=>{
    currentcoinsDisplay += 100
    coinsDisplay.textContent = `Coins: ${currentcoinsDisplay}`
})



statusBtn.addEventListener("click", ()=>{
    statusDisplay.classList.toggle("online")
    if (statusDisplay.classList.contains("online")) {
        statusDisplay.textContent = "Online 🟢"
    }else {
        statusDisplay.textContent = "Offline 🔴"
    }
})

 


loginForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    if (loginInput.value.length >= 3 && passwordInput.value.length >= 4) {
        loginMessage.textContent = "User saved successfuly!"
        usernameDisplay.textContent = `Username: ${loginInput.value}`
        loginMessage.classList.add("loginSuccess")
        setTimeout(()=>{
            loginMessage.textContent = ""
            loginInput.value = ""
            passwordInput.value = ""
        }, 3000)
    } else{
        loginMessage.textContent = "Username or password is unvalid!"
        loginMessage.classList.add("loginError")
        setTimeout(()=>{
            loginMessage.textContent = ""
            loginInput.value = ""
            passwordInput.value = ""
        }, 3000)
    }
})




document.addEventListener("keydown", (event)=>{
    if (event.key === "ArrowUp") {
        currentlevelDisplay += 1
        keyboardMessage.textContent = `Level: ${currentlevelDisplay}`
        levelDisplay.textContent = `Level: ${currentlevelDisplay}`
    } else if (event.key === "ArrowDown") {
        currentlevelDisplay = Math.max(1, currentlevelDisplay -= 1)
        keyboardMessage.textContent = `Level: ${currentlevelDisplay}`
        levelDisplay.textContent = `Level: ${currentlevelDisplay}`
    }
})
document.addEventListener("keydown", (event)=>{
    if (event.key === "Enter") {
        keyboardMessage.textContent = "User logged in!"
        statusDisplay.textContent = "Online 🟢"
    } else if(event.key === "Escape"){
        keyboardMessage.textContent = "User logged out!"
        statusDisplay.textContent = "Offline 🔴"
    }
})




mouseArea.addEventListener("mousemove", (event)=>{
    mouseMessage.textContent = "Mouse entered!"
    mousePosition.textContent = `X:${event.clientX} Y:${event.clientY}`
})
mouseArea.addEventListener("mouseleave", ()=>{
    mouseMessage.textContent = "Mouse leaved!"
})



themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("whitetheme")
        if (document.body.classList.contains("whitetheme")) {
            themeBtn.textContent = "🌙 Dark Mode"
        }else {
            themeBtn.textContent = "🌞 White Mode"
        }
})
