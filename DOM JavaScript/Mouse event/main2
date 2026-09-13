const position = document.querySelector("#position")
document.addEventListener("mousemove", (event)=>{
    position.textContent = `X: ${event.clientX} | Y: ${event.clientY}`
})


const tracker = document.querySelector("#tracker")
const trackerStatus = document.querySelector("#trackerStatus")
tracker.addEventListener("mousemove", (event)=>{
    trackerStatus.textContent = `X: ${event.clientX} | Y: ${event.clientY}`
})



const gameBox = document.querySelector("#gameBox")
const gameStatus = document.querySelector("#gameStatus")
const startBtn = document.querySelector("#startBtn")
gameBox.addEventListener("mouseenter", ()=>{
    gameStatus.textContent = "🎮 Ready to play!"
})
gameBox.addEventListener("mouseleave", ()=>{
    gameStatus.textContent = "👋 Come back!"
})
startBtn.addEventListener("click", ()=>{
    gameStatus.textContent = "🔥 Game started"
})
gameBox.addEventListener("mousemove", (event)=>{
    gameStatus.textContent = `X: ${event.clientX} | Y: ${event.clientY}`
})
