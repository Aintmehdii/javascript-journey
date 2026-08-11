class Player {
    constructor(username, level){
        this.username = username,
        this.level = level
    }

    showInfo(){
        console.log(`${this.username} | Level ${this.level}`)
    }
}
const player1 = new Player("Mahdi", 55);
const player2 = new Player("Emma", 80);
player1.showInfo()
player2.showInfo()




class CS2Player {
    constructor(username, level){
        this.username = username,
        this.level = level
    }

    levelUp(){
        return this.level += 5
    }
}
const player = new CS2Player("Mahdi", 55);

player.levelUp();
console.log(player.level);

player.levelUp();
console.log(player.level);




class SteamPlayer {
    constructor(username, level, premium) {
        this.username = username,
        this.level = level,
        this.premium = premium
    }

    getStatus() {
        if (this.premium) {
            return `${this.username} is Premium ⭐`
        } else{
            return `${this.username} is Regular`
        }
    }
}
const SteamPlayer1 = new SteamPlayer('Jack', 55, true)
console.log(SteamPlayer1.getStatus())





class CODPlayer {
    constructor(username, level, hours, premium) {
        this.username = username,
        this.level = level,
        this.hours = hours,
        this.premium = premium
    }

    getStatus() {
        if (this.premium) {
            return `${this.username} is Premium ⭐`
        } else{
            return `${this.username} is Regular`
        }
    }

    getFinalLevel() {
        return this.level += 10
    }

    hasPlayedEnough() {
        return this.hours >= 500
    }

    showProfile() {
        console.log(`${this.username} | Level ${this.getFinalLevel()} | ${this.hours}h | ${this.getStatus()} | Achievement: ${this.hasPlayedEnough()}`)
    }
}
const CODPlayer1 = new CODPlayer('Martinez', 48, 450, true)
CODPlayer1.showProfile()





class Game {
    constructor(title, genre, price) {
        this.title = title,
        this.genre = genre, 
        this.price = price
    }

    isFree(){
        if (this.price === 0) {
            return 'Free'
        }else{
            return `$${this.price}`
        }
    }

    showGame(){
        console.log(`${this.title} | ${this.genre} | ${this.isFree()}`)
    }
}
const game1 = new Game('CS2', 'FPS', 0)
const game2 = new Game('Elden Ring', 'RPG', 60)
game1.showGame()
game2.showGame()





class Product {
    constructor(name, price, quantity) {
        this.name = name,
        this.price = price,
        this.quantity = quantity
    }

    getTotalPrice(){
        return this.price * this.quantity
    }

    isExpensive(){
        return this.price >= 100
    }

    showProduct(){
        console.log(`${this.name} | $${this.price} | Quantity: ${this.quantity} | Total: $${this.getTotalPrice()} | Expensive: ${this.isExpensive()}`)
    }
}
const ProductOne = new Product('Monitor', 500, 2)
const ProductTwo = new Product('RTX 5090', 2500, 1)
const ProductThree = new Product('RedDragon m.2', 180, 4)
ProductOne.showProduct()
ProductTwo.showProduct()
ProductThree.showProduct()







class WarzonePlayer {
    constructor(username, level, hours, premium) {
        this.username = username,
        this.level = level,
        this.hours = hours,
        this.premium = premium
    }

    getStatus() {
        if (this.premium) {
            return `Premium ⭐`
        } else{
            return `Regular`
        }
    }

    levelUp(amount) {
        return this.level += amount
    }

    getRank() {
        if (this.level > 70) {
            return 'Diamond'
        } else if(this.level > 50){
            return 'Platinum'
        } else if(this.level > 30){
            return 'Gold'
        }else{
            return 'Silver'
        }
    }

    hasPlayedEnough() {
        return this.hours >= 500
    }

    showProfile() {
        console.log(`${this.username} | Level ${this.level} | ${this.getRank()} | ${this.hours}h | ${this.getStatus()} | Achievement: ${this.hasPlayedEnough()}`)
    }
}
const WarzonePlayer1 = new WarzonePlayer('Mahdi', 55, 450, true)
const WarzonePlayer2 = new WarzonePlayer('Jack', 20, 120, false)
const WarzonePlayer3 = new WarzonePlayer('Emma', 80, 620, true)

WarzonePlayer1.levelUp(10)
WarzonePlayer1.showProfile()

WarzonePlayer2.levelUp(15)
WarzonePlayer2.showProfile()

WarzonePlayer3.showProfile()
