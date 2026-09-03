const title = document.getElementById("title")
const LoginButton = document.getElementById("loginBtn")

const firstPlayer = document.querySelector(".player")
const allPlayer = document.querySelectorAll(".player")

const dashboard = document.querySelector("#title")
const status = document.querySelector("#status")
const LoginButton2 = document.querySelector("#loginBtn")

const footer = document.querySelector("#footer")
console.log(footer.textContent)

allPlayer.forEach(element => {
    console.log(element.textContent)
});

