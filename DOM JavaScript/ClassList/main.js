const themeBtn = document.querySelector("#themeBtn")
const title = document.querySelector("#title")

themeBtn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark")


    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️ Light Mode"
        localStorage.setItem("theme", "dark")
    }else {
        themeBtn.textContent = "🌙 Dark Mode"
        localStorage.setItem("theme", "light")
    }
})

const savedTheme = localStorage.getItem("theme")

if (savedTheme === "dark") {
    document.body.classList.add("dark")
    themeBtn.textContent = "☀️ Light Mode"
}
