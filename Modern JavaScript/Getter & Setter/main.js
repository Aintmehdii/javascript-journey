class Player {
    constructor(username, level){
        this.username = username
        this.level = level
    }

    get getInfo(){
        return `${this.username} | Level: ${this.level}`
    }
}
const player = new Player('Mahdi', 55)
console.log(player.getInfo)




class CS2Player {
    constructor(level, bonus){
        this.level = level
        this.bonus = bonus
    }

    get finalLevel() {
        return this.level + this.bonus
    }
}
const CSplayer = new CS2Player(55, 10)
console.log(CSplayer.finalLevel)





class Valorant {
    constructor(username, level){
        this.username = username
        this.level = level
    }

    set playerLevel(newLevel){
        if (newLevel >= 1 && newLevel <= 100) {
            return this.level = newLevel
        }
    }
}
const Vplayer = new Valorant('Kaka', 50)
Vplayer.playerLevel = 500
console.log(Vplayer.level)




class Product { 
    constructor(name, price){
        this.name = name
        this.price = price
    }

    get totalPrice(){
        return this.price * 1.20
    }

    set productPrice(newPrice){
        if (newPrice > 0) {
            return this.price = newPrice
        }
    }
}
const product1 = new Product('Monitor', 100)
product1.productPrice = -1
console.log(product1.totalPrice)





class User {
    constructor(username){
        this.username = username
    }

    get userName() {
        return this.username;
    }

    set userName(newUsername){
        if (newUsername.length >= 3) {
            this.username = newUsername
        }
    }
}
const user = new User('Jack')
user.userName = "Mahdi";
console.log(user.userName);





// Real-world situations
// Setters are useful for validation and controlled state changes:
// Usernames → minimum length, allowed characters
// Age → must be a valid range
// Password → validation before storing
// Game level → 1–100
// Product price → cannot be negative
// Bank balance → prevent invalid changes
// Account settings → normalize/validate inpu

// And one important point: you don't always need a setter. If a value shouldn't be changed through that interface, you can have a getter only.


