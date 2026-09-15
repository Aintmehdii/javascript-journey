const username = document.querySelector("#username")
const saveBtn = document.querySelector("#saveBtn")
const message = document.querySelector("#message")

saveBtn.addEventListener("click", ()=>{
    localStorage.setItem("username", username.value)
    message.textContent = "Username saved! ✅"
})

const localusername = localStorage.getItem("username")
if (localusername) {
    message.textContent = `Welcome back, ${localusername}! 👋`    
}else {
    message.textContent = "Please enter a valid username!"
}
