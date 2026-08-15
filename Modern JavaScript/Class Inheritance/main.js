class player{
    constructor(username, level){
        this.username = username,
        this.level = level
    }

    showInfo(){
        console.log(`${this.username} | ${this.level}`)
    }
}

class PremiumPlayer extends player{
    constructor(username, level, premium){
        super(username, level)
        this.premium = premium;
    }

    showPremium(){
        if (this.premium) {
            console.log('⭐ Premium')
        } else{
            console.log('Regular')
        }
    }
}
const player1 = new PremiumPlayer('Mahdi', 55, true)
player1.showInfo()
player1.showPremium()











class CODPlayer {
    constructor(username, level){
        this.username = username,
        this.level = level
    }


}
class WarzonePlayer extends CODPlayer{
    constructor(username, level, hours, premium){
        super(username, level);
        this.hours = hours,
        this.premium = premium
    }

    showInfo(){
        if (this.premium) {
            console.log(`${this.username} | ${this.level} | ${this.hours} | ⭐ Premium`)
        }else {
            console.log(`${this.username} | ${this.level} | ${this.hours}`)
        }
    }
}

const WPone = new WarzonePlayer('Matthew', 37, 450, false)
const WPtwo = new WarzonePlayer('Martinez', 601, 7920, true)
WPone.showInfo()
WPtwo.showInfo()








class GenshinPlayer{
    constructor(username, level){
        this.username = username,
        this.level = level
    }

    levelUp(){
        return this.level += 5
    }

    
}
class GenshinPlayerTime extends GenshinPlayer{
    constructor(username, level, hours){
        super(username, level)
        this.hours = hours
    }

    hasPlayedEnough(){
        if (this.hours >= 500) {
            console.log(`${this.username} LEVEL UP TO >> ${this.levelUp()}`)
        }else {
            console.log(`${this.username} Not achieved yet`)
        }
    }
}
const GenshinPlayer1 = new GenshinPlayerTime('Chandler', 60, 1180)
const GenshinPlayer2 = new GenshinPlayerTime('Emma', 45, 160)
const GenshinPlayer3 = new GenshinPlayerTime('Wizard', 59, 750)
GenshinPlayer1.hasPlayedEnough();
GenshinPlayer2.hasPlayedEnough();
GenshinPlayer3.hasPlayedEnough();






class CS2{
    constructor(username, level){
        this.username = username,
        this.level = level
    }

    showInfo(){
        console.log(`${this.username} | Level ${this.level}`)
    }
}

class PremiumCS2 extends CS2{
    constructor(username, level, premium){
        super(username, level);
        this.premium = premium
    }

    showInfo(){
        if (this.premium) {
            console.log(`${this.username} ⭐ Premium | ${this.level}`)
        }else {
            alert('Please buy premium for account log')
        }
    }
}

const CS2player_A = new PremiumCS2('Matt', 50, true)
CS2player_A.showInfo()







class Valorantusers{
    constructor(username, level){
        this.username = username
        this.level = level
    }

    showInfo(){
        console.log(`${this.username} | ${this.level}`)
    }
}

class PremiumValorantusers extends Valorantusers{
    constructor(username, level, premium){
        super(username, level)
        this.premium = premium
    }

    showInfo(){
        if (this.premium) {
            super.showInfo()
            console.log('Premium ⭐')
        }else {
            console.log(`${this.username} | ${this.level}`)
        }
    }
}

const Valorantuser1 = new PremiumValorantusers('Jack', 49, true)
Valorantuser1.showInfo()
