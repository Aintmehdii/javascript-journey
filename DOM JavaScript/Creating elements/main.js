const playersHtmldocument = document.querySelector("#players")

const players = [
    { username: "Mahdi", level: 55, premium: true },
    { username: "Jack", level: 22, premium: false },
    { username: "Emma", level: 80, premium: true }
];


players.forEach(players => {
    const player = document.createElement("p")
    
    if (players.premium) {
        player.textContent = `${players.username} ⭐ | Level: ${players.level} | Status: Premium`
    }else {
        player.textContent = `${players.username} | Level: ${players.level} | Status: Regular`
    }

    playersHtmldocument.appendChild(player)
});


// ==================================================== // 
const gameStore = document.querySelector("#gameStore")

const games = [
    { title: "CS2", genre: "FPS", price: 0 },
    { title: "Elden Ring", genre: "RPG", price: 60 },
    { title: "Minecraft", genre: "Sandbox", price: 30 },
    { title: "Valorant", genre: "FPS", price: 0 }
];

games.forEach(games => {
    const game = document.createElement("div")

    game.className = "game-card"
    
    if (games.price === 0) {
        game.textContent = `${games.title} - ${games.genre} - Free`
    } else{
        game.textContent = `${games.title} - ${games.genre} - $${games.price}`
    }

    gameStore.appendChild(game)
});


// ==================================================== // 
const shop = document.querySelector("#shop")

const products = [
    { name: "Mouse", price: 50, quantity: 2 },
    { name: "Keyboard", price: 120, quantity: 1 },
    { name: "Monitor", price: 500, quantity: 2 }
];

products.forEach(products => {
    const product = document.createElement("p")
    const productName = document.createElement("H3")

    productName.textContent =
    `${products.name}`

    product.textContent = 
    `Price: ${products.price} |
    Quantity: ${products.quantity} |
    Total: ${products.price * products.quantity}`

    shop.appendChild(productName)
    shop.appendChild(product)
});
