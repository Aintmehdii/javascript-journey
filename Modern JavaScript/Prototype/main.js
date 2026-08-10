function Player(username, level) {
    this.username = username,
    this.level = level    
}
Player.prototype.showInfo = function(){
    console.log(`${this.username} | Level ${this.level}`);
}

const player1 = new Player("Mahdi", 55);
const player2 = new Player("Emma", 80);
player1.showInfo();
player2.showInfo();





function SteamPlayer(username, level, bonus) {
    this.username = username,
    this.level = level,
    this.bonus = bonus
}
SteamPlayer.prototype.getFinallevel = function(){
    console.log(this.level + this.bonus)
}

const steamPlayer1 = new SteamPlayer('Mahdi', 55, 60)
steamPlayer1.getFinallevel();






function Laptop(brand, ram) {
    this.brand = brand,
    this.ram = ram
}
Laptop.prototype.showSpecs = function(){
    console.log(`${this.brand} | ${this.ram}GB`)
}

const Laptop1 = new Laptop('Asus', 64)
const Laptop2 = new Laptop('Lenovo', 16)
const Laptop3 = new Laptop('Mac', 8)
Laptop1.showSpecs()
Laptop2.showSpecs()
Laptop3.showSpecs();






function User(username, premium) {
    this.username = username,
    this.premium = premium
}
User.prototype.getStatus = function(){
    if (this.premium) {
        console.log(`${this.username} is Premium user`)
    }else {
        console.log(`${this.username} is Regular user`)
    }
}

const user1 = new User("Mahdi", true);
const user2 = new User("Jack", false);
user1.getStatus()
user2.getStatus()




function CS2Player(username, level, hours, premium) {
    this.username = username,
    this.level = level,
    this.hours = hours,
    this.premium = premium
}
CS2Player.prototype = {
    
    getStatus() {
        if (this.premium) {
            return `Premium`
        }else {
            return `Regular`
        }
    },

    getFinallevel() {
        return this.level + 5
    },

    showProfile() {
      console.log(`${this.username} | Level ${this.getFinallevel()} | ${this.hours}h | ${this.getStatus()}`)
    }
}

const CS2user = new CS2Player('Mahdi', 55, 450, true)
CS2user.showProfile()















function WarzonePlayer(username, level, hours, premium) {
    this.username = username,
    this.level = level,
    this.hours = hours,
    this.premium = premium
}

WarzonePlayer.prototype = {
    getStatus(){
        if (this.premium) {
            return `Premium ⭐`
        } else{
            return `Regular`
        }
    },

    getFinallevel(){
        return this.level + 10
    },

    showProfile(){
        console.log(`${this.username} | Level ${this.getFinallevel()} | ${this.hours} | ${this.getStatus()}
    500 hours Achivement: ${this.hasPlayedEnough()}`)
    },

    hasPlayedEnough(){
        return this.hours >= 500
    }
}



const WarzonePlayer1 = new WarzonePlayer("Mahdi", 55, 450, true)
const WarzonePlayer2 = new WarzonePlayer("Jack", 20, 120, false)
const WarzonePlayer3 = new WarzonePlayer("Emma", 80, 620, true)
WarzonePlayer1.showProfile()
WarzonePlayer2.showProfile()
WarzonePlayer3.showProfile();

