const player = {
    username: "Mahdi",
    level: 42,
    coins: 2500,
    premium: true
}

const playerJSON = JSON.stringify(player);
localStorage.setItem("playerJSON", playerJSON)

const savedPlayer = localStorage.getItem("playerJSON")
const playerData = JSON.parse(savedPlayer)

playerData.level = 43
playerData.coins += 500

localStorage.setItem("playerJSON", JSON.stringify(playerData))

console.log(playerData.username)
console.log(playerData.level)
console.log(playerData.coins)
console.log(playerData.premium)
