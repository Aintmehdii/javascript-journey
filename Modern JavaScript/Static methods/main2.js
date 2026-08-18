class Player {
    constructor(username, level, hours) {
        this.username = username
        this.level = level
        this.hours = hours
    }

    getInfo() {
        console.log(`${this.username} | Level: ${this.level} | ${this.hours}h`)
    }

    static getHighestLevel(player1, player2) {
        return player1.level > player2.level ? player1.level : player2.level
    }

    static getTotalHours(players) {
      return players.reduce((result, item)=>{
        return result + item.hours 
      }, 0)
    }

    static isValidLevel(player) {
        return player.level >= 1 && player.level <= 100
    }
}
const Player1 = new Player('Jack', 50, 800)
const Player2 = new Player('Matt', 175, 1250)

console.log(Player.getHighestLevel(Player1, Player2)) 

console.log(Player.getTotalHours([Player1, Player2]))

console.log(Player.isValidLevel(Player1))
console.log(Player.isValidLevel(Player2))
