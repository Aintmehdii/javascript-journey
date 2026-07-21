const numbers = [10, 50, 120, 30, 200];

const numberover100 = numbers.reduce((result, item)=>{
    
    if (item >= 100){
        return result + item
    }
return result
}, 0)
console.log(numberover100)




const users = [
    { name: "Mahdi", premium: true },
    { name: "Jack", premium: false },
    { name: "Emma", premium: true },
    { name: "Alex", premium: false }
];

const premiumusers = users.reduce((result, item)=>{
       return result + item.premium
}, 0)
console.log(premiumusers)




const movies = [
    "Tenet",
    "Interstellar",
    "Up",
    "Oppenheimer",
    "AAAAAAAAAAAAAAAAAAAAAAAAAA"
];

const longmovies = movies.reduce((result, item)=>{
  
    if (result.length <= item.length){
        return item
    } else {
        return result
    }
}, movies[0])
console.log(longmovies)




const cart = [
    {
        name: "Mouse",
        price: 50
    },
    {
        name: "Monitor",
        price: 500
    },
    {
        name: "Keyboard",
        price: 120
    }
];

const expensive = cart.reduce((result, item)=>{
    if (result.price <= item.price){
        return item
    } else {
        return result
    }
}, cart[0])
console.log(expensive)




const steam = [
    {
        username: "Mahdi",
        hours: 350
    },
    {
        username: "Jack",
        hours: 120
    },
    {
        username: "Emma",
        hours: 500
    }
];

const totalhours = steam.reduce((result, item)=>{
    return result + item.hours
}, 0)
console.log(totalhours)



// NESTED Reduce //
const academy = [
    {
        instructor: "John",
        courses: [
            {
                title: "HTML",
                students: 20
            },
            {
                title: "CSS",
                students: 15
            }
        ]
    },
    {
        instructor: "Sarah",
        courses: [
            {
                title: "JavaScript",
                students: 30
            }
        ]
    }
];


const academydetails = academy.reduce((result, item)=>{

    const totalsudent = item.courses.reduce((result, item)=>{
        return result + item.students;
    }, 0)

return result + totalsudent
}, 0)
console.log(academydetails)
