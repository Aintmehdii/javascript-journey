const stats = document.querySelector("#status")
const statusBtn = document.querySelector("#statusBtn")

statusBtn.addEventListener("click", ()=>{
    stats.classList.toggle("online")
    if (stats.classList.contains("online")) {
        stats.textContent = "Online 🟢"
    }else {
        stats.textContent = "Offline 🔴"
    }

    if (stats.classList.contains("online")) {
        localStorage.setItem("savedstatus", "online")
    }else {
        localStorage.setItem("savedstatus", "offline")
    }

    localStorage.setItem("savedtextcontent", stats.textContent)
})
const savedstats = localStorage.getItem("savedstatus")
if (savedstats === "online") {
    stats.classList.add("online")
    stats.textContent = "Online 🟢"
}else {
    stats.textContent = "Offline 🔴"
}



// ================================================ //



const level = document.querySelector("#level")
const levelUp = document.querySelector("#levelUp")
const reset = document.querySelector("#reset")

let currentLevel = Number(localStorage.getItem("savedlevel")) || 1
levelUp.addEventListener("click", ()=>{
    level.textContent = `Level: ${currentLevel += 1}`
    localStorage.setItem("savedlevel", currentLevel)
})

reset.addEventListener("click", ()=>{
    level.textContent = `Level: ${currentLevel = 1}`
    localStorage.setItem("savedlevel", currentLevel)
})

const savedlevel = localStorage.getItem("savedlevel") || 1
level.textContent = `Level: ${savedlevel}`



// ================================================ //



const player = document.querySelector("#player")
const normalBtn = document.querySelector("#normalBtn")
const proBtn = document.querySelector("#proBtn")
const resetBtn = document.querySelector("#resetBtn")

normalBtn.addEventListener("click", ()=>{
    player.classList.remove("pro")
    localStorage.setItem("playerstats", "normal")
})

proBtn.addEventListener("click", ()=>{
    player.classList.add("pro")
    localStorage.setItem("playerstats", "pro")
})

resetBtn.addEventListener("click", ()=>{
    player.classList.remove("pro")
    localStorage.setItem("playerstats", "normal")
})

const savedPlayer = localStorage.getItem("playerstats")

if (savedPlayer === "pro") {
    player.classList.add("pro")
}
