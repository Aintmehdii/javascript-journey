function Player(username, level, premium, hours) {
    this.username = username;
    this.level = level  
    this.premium = premium;  
    this.hours = hours;
}
const pOne = new Player("Mahdi", 55);
const pTwo = new Player("Emma", 80);

console.log(`${pOne.username} (${pOne.level})`)
console.log(`${pTwo.username} (${pTwo.level})`)




function Laptop(brand, ram, cpu) {
    this.brand = brand;
    this.ram = ram;
    this.cpu = cpu;
}

const LaptopApple = new Laptop('Apple', 32, 'M4')
const LaptopAsus = new Laptop('Asus', 16, 'Intel')

console.log(`${LaptopApple.brand} - ${LaptopApple.ram} - ${LaptopApple.cpu}`)
console.log(`${LaptopAsus.brand} - ${LaptopAsus.ram} - ${LaptopAsus.cpu}`)




function Movie(title, rating, year) {
    this.title = title;
    this.rating = rating;
    this.year = year;
}

const movie = new Movie('Interstellar', 9, 2014);
console.log(`${movie.title} (${movie.year}) ⭐${movie.rating}`)







const Playerteam = [
 new Player('Mahdi', 55, true, 450),
 new Player('Jack', 20, false, 120),
 new Player('Emma', 80, true, 600)
]
Playerteam.forEach(Playerdetails => {
    console.log(`${Playerdetails.username} - Level ${Playerdetails.level}`)
});



const premiumplayer = Playerteam.filter((premium)=>{
    return premium.premium
}).map((premiumusername)=>{
    return premiumusername.username
})
console.log(premiumplayer)






const TotalHours = Playerteam.reduce((result, item)=>{
    return item.hours + result
}, 0)
console.log(TotalHours)




const today = new Date();
console.log(`${today.getFullYear()}/${today.getMonth()}/${today.getDate()} Clock: ${today.getHours()}:${today.getMinutes()}`)




const mybirthday = new Date(2006, 3, 4);
console.log(mybirthday)





console.log(`Today's year: ${today.getFullYear()}
Birthday year: ${mybirthday}`)







function SteamUser(username, premium, hours, level) {
    this.username = username;
    this.premium = premium;
    this.hours = hours;
    this.level = level;
}

const Steamusers = [
new SteamUser('JacksonMZ', true, 450, 44),
new SteamUser('Martinelu', true, 222, 29),
new SteamUser('FatimaAg', false, 550, 70)
]

Steamusers.forEach(Steamusersname => {
    console.log(Steamusersname.username)
});

const premiumusers = Steamusers.filter((premiumuser)=>{
    return premiumuser.premium
}).map((premiumusername)=>{
    return premiumusername.username
})
console.log(premiumusers)

const highestuserlevel = Steamusers.reduce((result, item)=>{
    return item.level < result.level ? result : item
}, Steamusers[0])
console.log(highestuserlevel)


const TotalsteamHours = Steamusers.reduce((result, item)=>{return item.hours + result}, 0)
console.log(TotalsteamHours)


const isthereanyoneover500hours = Steamusers.some((check)=>{
    return check.hours > 500
})
console.log(isthereanyoneover500hours)



const todaydate = new Date();
console.log(`====================== ${todaydate.toDateString()} ====================== `)
