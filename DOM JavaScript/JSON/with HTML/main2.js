const username = document.querySelector("#username");
const level = document.querySelector("#level");
const coins = document.querySelector("#coins");

const usernameInput = document.querySelector("#usernameInput");
const saveUsernameBtn = document.querySelector("#saveUsernameBtn");
const levelUpBtn = document.querySelector("#levelUpBtn");
const earnCoinsBtn = document.querySelector("#earnCoinsBtn");

let player = JSON.parse(localStorage.getItem("player"));

if (player === null) {
    player = {
        username: "Mahdi",
        level: 25,
        coins: 1500,
        premium: true
    };
}

function updatePlayer() {
    username.textContent = player.username;
    level.textContent = player.level;
    coins.textContent = player.coins;

    localStorage.setItem("player", JSON.stringify(player));
}

saveUsernameBtn.addEventListener("click", () => {
    const newUsername = usernameInput.value.trim();
    if (newUsername.length >= 3) {
        player.username = newUsername;
        updatePlayer();
        usernameInput.value = "";
    } else {
        alert("Username must be at least 3 characters long!");
    }
});

levelUpBtn.addEventListener("click", () => {
    player.level += 1;
    updatePlayer();
});

earnCoinsBtn.addEventListener("click", () => {
    player.coins += 100;
    updatePlayer();
});
updatePlayer();
