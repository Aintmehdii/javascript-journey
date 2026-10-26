const username = document.querySelector("#username")
const level = document.querySelector("#level")
const coins = document.querySelector("#coins")
const premium = document.querySelector("#premium")
const resetBtn = document.querySelector("#resetBtn")

const player = {
    username: "Mahdi",
    level: 25,
    coins: 1500,
    premium: true
}
localStorage.setItem("player", JSON.stringify(player))


const userdata = JSON.parse(localStorage.getItem("player"))
username.textContent = userdata.username
level.textContent = userdata.level
coins.textContent = userdata.coins
premium.textContent = userdata.premium



resetBtn.addEventListener("click", ()=>{
    localStorage.removeItem("player")

    username.textContent = ""
    level.textContent = ""
    coins.textContent = ""
    premium.textContent = ""
})
