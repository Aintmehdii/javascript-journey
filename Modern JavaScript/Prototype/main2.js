function Player(username, level, hours) {
    this.username = username,
    this.level = level,
    this.hours = hours
}
Player.prototype = {
    getLevel(){
        return this.level
    },

    getHours(){
        return this.hours
    },

    showInfo(){
        console.log(`${this.username} | Level ${this.getLevel()} | ${this.getHours()}h`)
    }
}
const Player1 = new Player("Mahdi", 55, 450)
Player1.showInfo();



function CSPlayer(username, level, premium) {
    this.username = username,
    this.level = level, 
    this.premium = premium
}
CSPlayer.prototype = {
    getStatus(){
        if (this.premium) {
            return 'Premium ⭐'
        } else{
            return 'Regular'
        }
    },

    getInfo(){
        console.log(`${this.username} | ${this.level} | ${this.getStatus()}`)
    }
}
const CSPlayer1 = new CSPlayer('Mahdi', 55, true)
const CSPlayer2 = new CSPlayer('Jack', 20, false)
const CSPlayer3 = new CSPlayer('Emma', 80, true)
CSPlayer1.getInfo();
CSPlayer2.getInfo();
CSPlayer3.getInfo();





function QuestCompleted(username, level) {
    this.username = username,
    this.level = level
}
QuestCompleted.prototype.levelUp = function(){
    return this.level += 5
}
const Genshinplayer1 = new QuestCompleted("Mahdi", 55);
Genshinplayer1.levelUp();
Genshinplayer1.levelUp();
console.log(Genshinplayer1.level)




