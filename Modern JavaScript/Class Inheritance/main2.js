class Player{
    constructor(username, level, hours){
        this.username = username
        this.level = level
        this.hours = hours
    }

    levelUp(amount){
        return this.level += amount
    }
    showInfo(){
        console.log(`${this.username} | Level ${this.level} | ${this.hours}h`)
    }
}

class PremiumPlayer extends Player{
    constructor(username, level, hours, premium){
        super(username, level, hours)
        this.premium = premium
    }

    getStatus(){
        if (this.premium) {
            super.showInfo()
            console.log('Status: Premium ⭐')
        }else {
            super.showInfo()
            console.log('Status: Regular')
        }
    }
}

class RankPlayer extends PremiumPlayer{
    constructor(username, level, hours, premium, rank){
        super(username, level, hours, premium)
        this.rank = rank
    }

    getRank(){
        if (this.rank >= 30) {
            super.getStatus()
            console.log(`Rank: Diamond
            `)
        }else if (this.rank >= 20){
            super.getStatus()
            console.log(`Rank: Elite
            `)
        }else{
            super.getStatus()
            console.log(`Rank: Bronze
            `)
        }
    }
}


const Player1 = new RankPlayer('Jack', 45, 880, true, 30)
const Player2 = new RankPlayer('Mahdi', 80, 1250, true, 70)
const Player3 = new RankPlayer('Emma', 6, 19, false, 5)
Player1.getRank()
Player2.getRank()
Player3.getRank()
