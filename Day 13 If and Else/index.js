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
});
// =========================================================/
