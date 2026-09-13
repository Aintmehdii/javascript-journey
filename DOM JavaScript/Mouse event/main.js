const count = document.querySelector("#count")
const clickBtn = document.querySelector("#clickBtn")
let countnumber = 0
clickBtn.addEventListener("click", ()=>{
    count.textContent = `Clicks: ${countnumber += 1}`
})



const box = document.querySelector("#box")
const status = document.querySelector("#status")
box.addEventListener("mouseenter", ()=>{
    status.textContent = "Mouse entered 🟢"
})
box.addEventListener("mouseleave", ()=>{
    status.textContent = "Mouse left 🔴"
})



const upgrade = document.querySelector("#upgrade")
const message = document.querySelector("#message")
upgrade.addEventListener("dblclick", ()=>{
    message.textContent = "Player upgraded! ⚡"
})



const gameBox = document.querySelector("#gameBox")
const attack = document.querySelector("#attack")
const heal = document.querySelector("#heal")
const gameStatus = document.querySelector("#gameStatus")
const health = document.querySelector("#health")
let healthbar = 100

attack.addEventListener("click", ()=>{
    healthbar = Math.max(0, healthbar - 10)
    health.textContent = `Health: ${healthbar}`
})
heal.addEventListener("click", ()=>{
    healthbar = Math.min(100, healthbar + 20)
    health.textContent = `Health: ${healthbar}` 
})
gameBox.addEventListener("mouseenter", ()=>{
    gameStatus.textContent = "🎮 Game started!"
})
gameBox.addEventListener("mouseleave", ()=>{
    gameStatus.textContent = "👋 Game paused"
})
attack.addEventListener("dblclick", () => {
    gameStatus.textContent = "💥 Critical Attack!"
})
