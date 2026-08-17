// 🟢 Task 1 — Class Information
class Player {
    constructor(username, level) {
        this.username = username
        this.level = level
    }

    showInfo() {
        console.log(`${this.username} | Level ${this.level}`)
    }

    static gameName() {
        console.log('CS2')
    }
}
const Mahdi = new Player('Darkness', 44)
Mahdi.showInfo()
Player.gameName()




// 🟢 Task 2 — Username Validator
class User {
    constructor(username) {
        this.username = username;
    }

    static isValidUsername(username) {
        return username.length >= 3
    }
}
console.log(User.isValidUsername('Mahdi'))
console.log(User.isValidUsername('JO'))




// 🟡 Task 3 — Game Price Checker
class Game {
    constructor(title, price) {
        this.title = title
        this.price = price
    }

    showGame() {
        console.log(`${this.title} | ${Game.isFree(this.price) ? "Free" : "$" + this.price}`)
    }

    static isFree(price) {
        if (price === 0) {
            return true
        }else {
            return false
        }
    }
}
const GameA = new Game('CS2', 0)
GameA.showGame()





// 🟡 Task 4 — Player Factory
class CS2Player {
    constructor(username, level) {
        this.username = username
        this.level = level
    }

    static createBeginner(username) {
        return new CS2Player(username, 1)
    }
}
const playerA = CS2Player.createBeginner('Jack')
console.log(playerA)




// 🟠 Task 5 — Shop Utility
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    static calculateDiscount(price, percentage) {
        return price * percentage / 100
    }
}
const ProductA = Product.calculateDiscount(400, 5)
console.log(ProductA)




// 🔥 Task 6 — Static + Normal Method
class GePlayer {
    constructor(username, level) {
        this.username = username
        this.level = level
    }

    getLevel() {
        return this.level
    }

    static compareLevels(player1, player2) {
        return player1.getLevel() > player2.getLevel() ? player1.getLevel() : player2.getLevel()
    }
}
const PlayerOne = new GePlayer('Mahdi', 50)
const PlayerTwo = new GePlayer('Emma', 80)
console.log(GePlayer.compareLevels(PlayerOne, PlayerTwo))

