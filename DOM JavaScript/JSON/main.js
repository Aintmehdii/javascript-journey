const player = {
    name: "Mahdi",
    level: 25,
    premium: true
}

const JSONplayer = JSON.stringify(player)
localStorage.setItem("player", JSONplayer)

const savedPlayer = localStorage.getItem("player")
const playerData = JSON.parse(savedPlayer)

console.log(playerData.name)
console.log(playerData.level)
console.log(playerData.premium)

// ============================================================= //
