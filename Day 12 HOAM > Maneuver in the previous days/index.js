const users = [
    { name: "Mahdi", premium: true },
    { name: "Jack", premium: false },
    { name: "Emma", premium: true }
];
// ================================================== //
const username = users.map((user)=>{
    return user.name
})
console.log(username)
// ================================================== //



// ================================================== //
const premiumuser = users.filter((user)=>{
    return user.premium
})
console.log(premiumuser)
// ================================================== //



// ================================================== //
const Alex = users.some((user)=>{
    return user.name === 'Alex'
})
console.log(Alex)
// ================================================== //



// ================================================== //
const firstPremUser = users.find((user)=>{
    return user.premium
})
console.log(firstPremUser)
// ================================================== //









const steam = [
    {
        username: "Mahdi",
        games: [
            {
                title: "CS2",
                hours: 350
            },
            {
                title: "Valorant",
                hours: 180
            }
        ]
    },
    {
        username: "Emma",
        games: [
            {
                title: "Elden Ring",
                hours: 500
            }
        ]
    }
];
// ================================================== //
const everyusername = steam.map((username)=>{
    return username.username
})
console.log(everyusername)
// ================================================== //



// ================================================== //
const steamuserdetails = steam.map((steamuser)=>{
    return {
        username: steamuser.username,
        Totalgames: steamuser.games.length
    }
})
console.log(steamuserdetails)
// ================================================== //



// ================================================== //
const Emma = steam.find((steamuser)=>{
    return steamuser.username === 'Emma'
})
console.log(Emma.games[0].title)
// ================================================== //



// ================================================== //
const Jack = steam.some((steamuser)=>{
    return steamuser.username === 'Jack'
})
console.log(Jack)
// ================================================== //



// ================================================== //
const steamdetials = steam.map((steamdetial)=>{
    return {
        username: steamdetial.username,
        games: steamdetial.games.map((game)=>{
            return game.title
        })
    }
})
console.log(steamdetials)
// ================================================== //



// ================================================== //
const Mahdi = steam.find((steamuser)=>{
    return steamuser.username === 'Mahdi'
})
const MahdiGames = Mahdi.games.some((MahdiGame)=>{
    return MahdiGame.title === 'Valorant'
})
console.log(MahdiGames)
// ================================================== //



// ================================================== //
steam.forEach(steam => {
    console.log(steam.username)
        
    steam.games.forEach(steamgame => {
            console.log(` - ${steamgame.title}`)
        });
});
// ================================================== //





















const academy = [
    {
        instructor: "John",
        courses: [
            {
                title: "HTML",
                students: [
                    "Mahdi",
                    "Jack"
                ]
            },
            {
                title: "CSS",
                students: [
                    "Emma"
                ]
            }
        ]
    },
    {
        instructor: "Sarah",
        courses: [
            {
                title: "JavaScript",
                students: [
                    "Ali",
                    "Sophia",
                    "David"
                ]
            }
        ]
    }
];


// ================================================== //
academy.forEach(instructorname => {
    console.log(instructorname.instructor)
});
// ================================================== //


// ================================================== //
const instructornames = academy.map((academyinstructor)=>{
    return academyinstructor.instructor
})
console.log(instructornames)
// ================================================== //


// ================================================== //
const findsarah = academy.find((academyinstructor)=>{
    return academyinstructor.instructor === 'Sarah'
})
console.log(findsarah)
// ================================================== //


// ================================================== //
const Johndetials = academy.find((academyinstructor)=>{
    return academyinstructor.instructor === 'John'
})
const Johnclass = Johndetials.courses.some((Johndetial)=>{
    return Johndetial.title === 'CSS'
})
console.log(Johnclass)
// ================================================== //


// ================================================== //
const academydetails = academy.map((academydetail)=>{
    return {
    instructor: academydetail.instructor,
    coursecount:  academydetail.courses.map((coursecount)=>{
            return {
                title : coursecount.title,
                titleLenght: coursecount.title.length
            }
        })
}
})
console.log(academydetails)
// ================================================== //


// ================================================== //
academy.forEach(academy => {
    console.log(`Students of ${academy.instructor} class: `)
    academy.courses.forEach(academycourses => {
        academycourses.students.forEach(academystudent => {
            console.log(` - ${academystudent}`)
        });
    });
});
// ================================================== //


// ================================================== //
const John = academy.find((academy)=>{
    return academy.instructor === 'John'
})
const JohnCourses = John.courses.find((JohnCourses)=>{
    return JohnCourses
}) // I could do courses[0] but I found out there is two object in courses so we should check all of them //
const MahdiStudentofJohn = JohnCourses.students.some((Johnstudents)=>{
    return Johnstudents === 'Mahdi'
})
console.log(MahdiStudentofJohn)
// ================================================== //
