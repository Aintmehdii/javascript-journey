const loginBtn = document.querySelector("#loginBtn")
const stats = document.querySelector("#status")

loginBtn.addEventListener("click", ()=>{
    stats.textContent = "Welcome Mahdi! ⭐"
})


const levelBtn = document.querySelector("#levelBtn")
const level = document.querySelector("#level")
let levelUp = 55;
levelBtn.addEventListener("click", ()=>{
    levelUp += 1 
    level.textContent = `Level: ${levelUp}`        
})


const premiumBtn = document.querySelector("#premiumBtn")
const userstatus = document.querySelector("#userstatus")
let premium = false
premiumBtn.addEventListener("click", ()=>{
    if (!premium) {
        premium = true
        userstatus.textContent = "Premium User ⭐"
    }else {
        premium = false
        userstatus.textContent = "Regular User"
    }
})
