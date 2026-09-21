const player = document.querySelector("#player")
const activate = document.querySelector("#activate")
const deactivate = document.querySelector("#deactivate")

activate.addEventListener("click", ()=>{
    player.classList.add("active")
})
deactivate.addEventListener("click", ()=>{
    player.classList.remove("active")
})


// =================================================== //


const stats = document.querySelector("#status")
const toggleBtn = document.querySelector("#toggleBtn")

toggleBtn.addEventListener("click", ()=>{
    stats.classList.toggle("online")
    if (stats.classList.contains("online")) {
        stats.textContent = "Online 🟢"
    }else {
        stats.textContent = "Offline 🔴"
    }
})


// =================================================== //


const username = document.querySelector("#username")
const saveBtn = document.querySelector("#saveBtn")
const message = document.querySelector("#message")

saveBtn.addEventListener("click", ()=>{
    localStorage.setItem("savedusername", username.value)
    message.textContent = "Username saved! ✅"
})

const saveduser = localStorage.getItem("savedusername")
if (saveduser) {
    message.textContent = `Welcome back, ${saveduser}👋`
}else {
    message.textContent = "Please enter a valid username!"
}





const score = document.querySelector("#score")
const addBtn = document.querySelector("#addBtn")
const removeBtn = document.querySelector("#removeBtn")
let currentscore = Number(localStorage.getItem("savedscore")) || 0

addBtn.addEventListener("click", ()=>{
    
    score.textContent = `Score: ${currentscore += 10}`
    localStorage.setItem("savedscore", currentscore)

})
removeBtn.addEventListener("click", ()=>{
    
    score.textContent = `Score: ${Math.max(0 ,currentscore -= 5)}`
    localStorage.setItem("savedscore", currentscore)

})

let savescore = Number(localStorage.getItem("savedscore"))
score.textContent = `Score: ${savescore}`


// =================================================== //


const themeBtn = document.querySelector("#themeBtn")
themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode"
    }else {
        themeBtn.textContent = "🌙 Dark Mode"
    }
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("savedtheme", "dark")
    } else {
        localStorage.setItem("savedtheme", "light")
    }
    localStorage.setItem("savedBtntextContent", themeBtn.textContent)
})

const savedtheme = localStorage.getItem("savedtheme")
if (savedtheme === "dark") {
    document.body.classList.add("dark")
    themeBtn.textContent = "☀️ Light Mode"
} else {
    themeBtn.textContent = "🌙 Dark Mode"
}
