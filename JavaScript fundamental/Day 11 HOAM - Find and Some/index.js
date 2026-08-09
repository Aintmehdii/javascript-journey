// High Order Array Method //

// Find //
// ==================================================== //
const numbers = [5, 12, 20, 8, 30];
const greaternum = numbers
.find((number)=>{
    return number >= 12
})
console.log(greaternum)
// ==================================================== //

// ==================================================== //
const movies = [
    "Interstellar",
    "Batman",
    "Tenet",
    "Inception"
];
const Tenet = movies
.find((movie)=>{
    return movie === 'Tenet'
})
console.log(Tenet)
// ==================================================== //

// ==================================================== //
const users = [
    {
        name: "Mahdi",
        premium: true
    },
    {
        name: "Jack",
        premium: false
    },
    {
        name: "Emma",
        premium: true
    }
];
const Jack = users
.find((user)=>{
    return user.name === 'Jack'
})
console.log(Jack)
const firstpremiumuser = users
.find((user)=>{
    return user.premium
})
console.log(firstpremiumuser)
// ==================================================== //

// ==================================================== //
const laptops = [
    {
        brand: "Asus",
        ram: 16
    },
    {
        brand: "Apple",
        ram: 32
    },
    {
        brand: "Lenovo",
        ram: 8
    }
];
const RAM32 = laptops
.find((laptop)=>{
    return laptop.ram === 32
})
console.log(RAM32)
// ==================================================== //

// ==================================================== //
const steam = [
    {
        username: "Mahdi",
        games: [
            {
                title: "CS2",
                genre: "FPS"
            },
            {
                title: "Valorant",
                genre: "FPS"
            }
        ]
    },
    {
        username: "Emma",
        games: [
            {
                title: "Elden Ring",
                genre: "RPG"
            }
        ]
    }
];
const Emma = steam
.find((steamuser)=>{
    return steamuser.username === 'Emma'
})
console.log(Emma)
console.log(Emma.games[0].genre)
// ==================================================== //

// ==================================================== //
const academy = [
    {
        instructor: "John",
        courses: [
            {
                title: "HTML",
                lessons: 15
            },
            {
                title: "CSS",
                lessons: 20
            }
        ]
    },
    {
        instructor: "Sarah",
        courses: [
            {
                title: "JavaScript",
                lessons: 40
            }
        ]
    }
];
const Sarah = academy
.find((academyuser)=>{
    return academyuser.instructor === 'Sarah'
}) 
console.log(Sarah)
console.log(Sarah.courses[0].title)
// ==================================================== //




// Some //
// ==================================================== //
const prices = [20, 50, 150, 40];

const QUESTIONprice = prices
.some((price)=>{
    return price >=100
})
console.log(QUESTIONprice)
// ==================================================== //

// ==================================================== //
const NETmovies = [
    "Interstellar",
    "Batman",
    "Tenet"
];
const Avatar = NETmovies
.some((movie)=>{
    return movie === 'Avatar'
})
console.log(Avatar)
// ==================================================== //

// ==================================================== //
const Premusers = [
    {
        name: "Mahdi",
        premium: true
    },
    {
        name: "Jack",
        premium: false
    },
    {
        name: "Emma",
        premium: true
    }
];
const premiumTorF = Premusers
.some((user)=>{
    return user.premium
})
console.log(premiumTorF)
// ==================================================== //

// ==================================================== //
const laptopsDetails = [
    {
        brand: "Asus",
        ram: 16
    },
    {
        brand: "Apple",
        ram: 32
    },
    {
        brand: "Lenovo",
        ram: 8
    }
];
const RAM32TorF = laptopsDetails
.some((laptop)=>{
    return laptop.ram === 64
})
console.log(RAM32TorF)
// ==================================================== //

// ==================================================== //
const BRAVOacademy = [
    {
        instructor: "John",
        courses: [
            {
                title: "HTML",
                lessons: 15
            },
            {
                title: "CSS",
                lessons: 20
            }
        ]
    },
    {
        instructor: "Sarah",
        courses: [
            {
                title: "JavaScript",
                lessons: 40
            }
        ]
    }
];

const SarahUser = BRAVOacademy
.find((user)=>{
    return user.instructor === 'Sarah'
})
const teachesJS = Sarah.courses
.some((course)=>{
    return course.title === 'JavaScript'
})
console.log(SarahUser)
console.log(teachesJS)
// ==================================================== //
