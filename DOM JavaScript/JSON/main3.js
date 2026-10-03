const gameSettings = {
    volume: 80,
    difficulty: "hard",
    fullscreen: true,
    language: "English"
}

const gameSettingsJSON = JSON.stringify(gameSettings)
localStorage.setItem("gameSettings", gameSettingsJSON)

const gameSettingsLocalStorage = localStorage.getItem("gameSettings")
const gameSettingsSavedData = JSON.parse( gameSettingsLocalStorage)

console.log(gameSettingsSavedData.volume)
console.log(gameSettingsSavedData.difficulty)
console.log(gameSettingsSavedData.fullscreen)
console.log(gameSettingsSavedData.language)
