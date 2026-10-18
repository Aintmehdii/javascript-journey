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

const password = document.querySelector("#password")
const showPassword = document.querySelector("#showPassword")


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

    
  




let currentlevelDisplay = Number(localStorage.getItem("savedLevel")) || 1
levelDisplay.textContent = localStorage.getItem("savedLevelDisplay") || "Level: 1"
levelUpBtn.addEventListener("click", ()=>{
    currentlevelDisplay += 1
    levelDisplay.textContent = `Level: ${currentlevelDisplay}`
    localStorage.setItem("savedLevel", currentlevelDisplay)
    localStorage.setItem("savedLevelDisplay", levelDisplay.textContent)
})

let currentcoinsDisplay = Number(localStorage.getItem("savedCoins")) || 0
coinsDisplay.textContent = localStorage.getItem("savedCoinDisplay") || "Coins: 0"
coinsBtn.addEventListener("click", ()=>{
    currentcoinsDisplay += 100
    coinsDisplay.textContent = `Coins: ${currentcoinsDisplay}`
    localStorage.setItem("savedCoins", currentcoinsDisplay)
    localStorage.setItem("savedCoinDisplay", coinsDisplay.textContent)
})

const savedStatus = localStorage.getItem("savedStatus")
if (savedStatus === "Online") {
    statusDisplay.textContent = "Online 🟢"
    statusDisplay.classList.add("online")
}else {
    statusDisplay.textContent = "Offline 🔴"
}
statusBtn.addEventListener("click", ()=>{
    statusDisplay.classList.toggle("online")
    if (statusDisplay.classList.contains("online")) {
        statusDisplay.textContent = "Online 🟢"
        localStorage.setItem("savedStatus", "Online")
    }else {
        statusDisplay.textContent = "Offline 🔴"
        localStorage.setItem("savedStatus", "Offline")
    }
})

usernameDisplay.textContent = localStorage.getItem("savedUsername") || "Username: Guest"
loginForm.addEventListener("submit", (event)=>{
    event.preventDefault()
    if (loginInput.value.length >= 3 && passwordInput.value.length >= 4) {
        loginMessage.textContent = "User saved successfuly!"
        usernameDisplay.textContent = `Username: ${loginInput.value}`
        loginMessage.classList.add("loginSuccess")

        localStorage.setItem("savedPassword", passwordInput.value)
        localStorage.setItem("savedUsername", `Username: ${loginInput.value}`)

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

showPassword.addEventListener("click", () => {
    if (showPassword.textContent === "Show Password") {
        password.textContent = localStorage.getItem("savedPassword");
        showPassword.textContent = "Hide Password";
    } else {
        password.textContent = "****";
        showPassword.textContent = "Show Password";
    }
});











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


const savedTheme = localStorage.getItem("savedTheme")
if (savedTheme === "DarkMode") {
    themeBtn.textContent = "🌙 Dark Mode"
    document.body.classList.add("whitetheme")
}else {
    themeBtn.textContent = "🌞 White Mode"
}
themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("whitetheme")
        if (document.body.classList.contains("whitetheme")) {
            themeBtn.textContent = "🌙 Dark Mode"
            localStorage.setItem("savedTheme", "DarkMode")
        }else {
            themeBtn.textContent = "🌞 White Mode"
            localStorage.setItem("savedTheme", "WhiteMode")
        }
})
