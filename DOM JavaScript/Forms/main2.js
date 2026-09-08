const form = document.querySelector("#registerForm")
const username = document.querySelector("#registerUsername")
const level = document.querySelector("#registerLevel")
const message = document.querySelector("#registerMessage")

form.addEventListener("submit", (event)=>{
    event.preventDefault()
    const playerLevel = Number(level.value)
    if (username.value.length >= 3 && playerLevel >= 1 && playerLevel <= 100) {
        message.textContent = `${username.value} | level: ${level.value}`
    }else {
        message.textContent = "Details are invalid!"
    }
})

// ============================== Var ERROR ============================== //

const app = document.querySelector("#app")
const title = document.createElement("h4")
const stats = document.createElement("p")

app.appendChild(title)
app.appendChild(stats)
title.textContent = "Mahdi's Gaming Dashboard"
stats.textContent = "Online 🟢"



const players = [
    { username: "Mahdi", level: 55 },
    { username: "Jack", level: 22 },
    { username: "Emma", level: 80 }
];
const player = document.querySelector("#players")

players.forEach(element => {
    const div = document.createElement("div")
    const h2 = document.createElement("h4")
    const p = document.createElement("p")

    div.appendChild(h2)
    div.appendChild(p)
    player.appendChild(div)
    h2.textContent = element.username
    p.textContent = `Level: ${element.level}`
});



const button = document.createElement("button")
app.appendChild(button)
button.textContent = "Click Me"
button.addEventListener("click", ()=>{
    button.textContent = "Clicked! ✅"
})



const CSplayer = {
    username: "Mahdi",
    level: 55
};
const CSuser = document.createElement("h5")
const CSuserLevel = document.createElement("p")
const levelUp = document.createElement("button")

player.appendChild(CSuser)
player.appendChild(CSuserLevel)
player.appendChild(levelUp)
CSuser.textContent = CSplayer.username
CSuserLevel.textContent = CSplayer.level
levelUp.textContent = "Level UP!"

levelUp.addEventListener("click", ()=>{
    CSplayer.level += 1
    CSuserLevel.textContent = CSplayer.level
})



const playerForm = document.querySelector("#playerForm")
const username = document.querySelector("#username")
const level = document.querySelector("#level")
const result = document.querySelector("#result")

playerForm.addEventListener("submit", (event)=>{
    event.preventDefault()

    const CSusername = document.createElement("h4")
    const CSlevel = document.createElement("p")

    CSusername.textContent = username.value
    CSlevel.textContent = `Level: ${level.value}`

    result.appendChild(CSusername)
    result.appendChild(CSlevel)
})
