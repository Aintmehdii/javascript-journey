// Simple IF statement //
const age = 20;
if (age >= 18) {
    console.log('Adult')
}




const game = "Valorant";
if (game === 'Valorant') {
    console.log('FPS Game')
}





const user = {
    name: "Mahdi",
    premium: true
};
if (user.premium) {
    console.log(`${user.name} is Premium user`)
}





const numbers = [5, 20, 8, 40, 11];
numbers.forEach(number => {
    if (number >= 10) {
        console.log(number)
    }
});




const movies = [
    "Batman",
    "Interstellar",
    "Tenet",
    "Avatar"
];
movies.forEach(movie => {
    if (movie === "Tenet") {
        console.log(`${movie} is available`)
    }
});
// ========================================================================= //







// IF + ELSE //
const Hisage = 15;
if (Hisage >= 18) {
    console.log('He is Adult.')
} else{
    console.log('He is Minor.')
}


const Premiumuser = {
    name: "Mahdi",
    premium: false
};
if (Premiumuser.premium) {
    console.log(`${Premiumuser.name} is Premium`)
} else{
    console.log(`${Premiumuser.name} is Free user.`)
}


const Steamgame = "CS2";
if (Steamgame === 'Valorant'){
    console.log('FPS')
} else{
    console.log('Diffrent Game')
}


const prices = [20, 150, 60, 250];
prices.forEach(price => {
    if (price >= 100) {
        console.log(`${price} Expensive`)
    } else{
        console.log(`${price} Cheap`)
    }
});



const students = [
    {
        name: "Mahdi",
        grade: 95
    },
    {
        name: "Jack",
        grade: 70
    },
    {
        name: "Emma",
        grade: 100
    }
];
students.forEach(student => {
    if (student.grade >= 90) {
        console.log(`${student.name} Passed with Excellence`)
    } else{
        console.log(`${student.name} Passed`)
    }
});
// ========================================================================= //





// ELSE IF //
const Herage = 20;
if (Herage <= 13) {
    console.log('Child')
} else if (Herage <= 18){
    console.log('Teenager')
}   else{
    console.log('Adult')
}




const score = 84;
if (score >= 90) {
    console.log('A')
} else if (score >= 80){
    console.log('B')
} else if (score >= 70){
    console.log('C')
} else{
    console.log('Failed')
}





const kills = 27;
if (kills <= 10) {
    console.log('Beginner')
} else if (kills <= 20){
    console.log('Intermediate')
} else if (kills <= 30){
    console.log('Pro')
} else {
    console.log('Legend')
}





const total = 750;
if (total >= 1000) {
    console.log('20% Discount')
} else if (total >= 500){
    console.log('10% Discount')
} else if (total >= 100){
    console.log('5% Discount')
} else {
    console.log('No Discount')
} // We should get hightest number in first IF //







const ratings = [9.5, 7.8, 5.2, 8.9, 3.1];
ratings.forEach(rate => {
    if (rate >= 9) {
        console.log('Excellent')
    } else if (rate >= 7){
        console.log('Good')
    } else if (rate >= 5){
        console.log('Average')
    } else {
        console.log('Poor')
    }
});









const players = [
    { name: "Mahdi", goals: 35 },
    { name: "Jack", goals: 18 },
    { name: "Emma", goals: 7 },
    { name: "Alex", goals: 0 }
];
players.forEach(player => {
    if (player.goals >= 30){
        console.log(`${player.name} World Class`)
    } else if (player.goals >= 15){
        console.log(`${player.name} Professional`)
    } else if (player.goals >= 1){
        console.log(`${player.name} Rising Star`)
    } else {
        console.log(`${player.name} No goals`)
    }










// AND && Logical operators //
const user = {
    age: 20,
    premium: true
};
if (user.age >= 18 && user.premium) {
    console.log('Premium Adult')
}




const laptop = {
    brand: "Apple",
    ram: 32
};
if (laptop.brand === 'Apple' && laptop.ram >= 16) {
    console.log('Poweful Mac')
}




const players = [
    {
        name: "Mahdi",
        goals: 35,
        assists: 10
    },
    {
        name: "Jack",
        goals: 8,
        assists: 12
    },
    {
        name: "Emma",
        goals: 18,
        assists: 6
    }
];
players.forEach(player => {
    if (player.goals >= 15 && player.assists >= 5) {
        console.log(`${player.name}`)
    }
});
// ==================================================================== //






// OR || Logical operators //
const game = "Minecraft";
if (game === 'Minecraft' || game === 'CS2') {
    console.log('Popular Game')
}





const Steamuser = {
    premium: false,
    admin: true
};
if (Steamuser.admin || Steamuser.premium) {
    console.log('Acess Granted')
}
// ==================================================================== //







// NOT ! Logical operators //
const Spotifyuser = {
    name: "Mahdi",
    premium: false
};
if (!Spotifyuser.premium) {
    console.log(`Dear ${Spotifyuser.name} please Upgrade to Premium`)
}







const steamUsers = [
    {
        username: "Mahdi",
        premium: true,
        age: 20
    },
    {
        username: "Jack",
        premium: false,
        age: 17
    },
    {
        username: "Emma",
        premium: true,
        age: 16
    }
];
steamUsers.forEach(users => {
    if (users.age >= 18 && users.premium) {
        console.log(`${users.username} have Full Access`)
    } else if (users.premium || users.age >= 18){
        console.log(`${users.username} have Limited Access`)
    } else {
        console.log(`${users.username} Have no Access`)
    }
});
// ==================================================================== //







// ? : Ternary operators //
const JackAge = 22;
console.log(JackAge >= 18 ? 'Adult' : 'Minor')




const SteamGame = 'Valorant';
console.log(SteamGame === 'Valorant' ? 'FPS' : 'Other genre')




const YouTubeuser = {
    name: "Mahdi",
    premium: false
};
console.log(YouTubeuser.premium ? `${YouTubeuser.name} ⭐` : `${YouTubeuser.name}`)





const price = 150;
const Status = price >= 100 ? 'Expensive' : 'Cheap'
console.log(Status)




const Maclaptop = {
    brand: "Apple",
    ram: 32
};
console.log(Maclaptop.ram >= 16 ? 'Pro' : 'Basic');





const USAplayers = [
    {
        name: "Mahdi",
        goals: 35
    },
    {
        name: "Jack",
        goals: 8
    },
    {
        name: "Emma",
        goals: 18
    }
];
USAplayers.forEach(player => {
    console.log(player.goals >= 30 ? `${player.name} is World Class` : player.goals >= 15 ? `${player.name} is Professional` : `${player.name} - Rising Star`)
}); 
// I'm going to explain this code. if player have goals over than 30 print player name and Is World Class, Else if player have goals between 15-29 print player name + Is Professional, Else player score is under 14 print player name + - Rising Star //
});
// =========================================================/
