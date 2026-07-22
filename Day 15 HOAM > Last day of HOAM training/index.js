const steam = [
    {
        username: "Mahdi",
        premium: true,
        hours: 420
    },
    {
        username: "Jack",
        premium: false,
        hours: 120
    },
    {
        username: "Emma",
        premium: true,
        hours: 550
    }
];


steam.forEach(users => {
    if (users.premium) {
        console.log(`${users.username} ⭐`)
    } else {
        console.log(users.username)
    }
});

const steampremium = steam.map((users)=>{
    if (users.premium) {
        return users.username  
    }
})
console.log(steampremium)

const totalhours = steam.reduce((total, item)=>{
    return total + item.hours
}, 0)
console.log(totalhours)

const morethanXhours = steam.some((users)=>{
    return users.hours >= 500
})
console.log(morethanXhours)

const Jack = steam.find((user)=>{
    if (user.username === 'Jack') {
        console.log(user.hours)
    }
})



























const cart = [
    {
        name: "Mouse",
        price: 40,
        quantity: 2
    },
    {
        name: "Keyboard",
        price: 120,
        quantity: 1
    },
    {
        name: "Monitor",
        price: 350,
        quantity: 2
    }
];

cart.forEach(details => {
    console.log(`${details.name} x${details.quantity}`)
});

const cartprice = cart.map((items)=>{
    return `${items.name} ($${items.price})`
})
console.log(cartprice)

const totalcart = cart.reduce((total, item)=>{
    return total + item.quantity
}, 0)
console.log(totalcart)

const totalcost = cart.reduce((total, item)=>{
    return total + item.price * item.quantity
}, 0)
console.log(totalcost)

const mostexpensive = cart.reduce((most, item)=>{
    if (item.price > most.price) {
        return item
    } else {
        return most
    }
}, cart[0])
console.log(mostexpensive)























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
            },
            {
                title: "React",
                students: 25
            }
        ]
    }
];
academy.forEach(details => {
    console.log(details.instructor)
    details.courses.forEach(courses => {
        console.log(` - ${courses.title}`)
    });
});


const academydetails = academy.map((detail)=>{
    return {
        instructor: detail.instructor,
        totalCourse: detail.courses.length
    }
})
console.log(academydetails)


const totalstudent = academy.reduce((total, item)=>{
    const intocourse = item.courses.reduce((total, item)=>{
        return total + item.students
    }, 0)
return total + intocourse
}, 0)
console.log(totalstudent)


const anycourseoverX = academy.some((courses)=>{
    const course = courses.courses.some((students)=>{
        return students.students > 25
    })
return course
})
console.log(anycourseoverX)


const Sarahdetails = academy.find((detail)=>{
    return detail.instructor === 'Sarah'
})
const Sarahcourse = Sarahdetails.courses.map((course)=>{
    return course.title
})
console.log(`${Sarahcourse}`)




















const netflix = [
    {
        profile: "Mahdi",
        premium: true,
        watchList: [
            {
                title: "Dark",
                episodes: 26
            },
            {
                title: "Breaking Bad",
                episodes: 62
            }
        ]
    },
    {
        profile: "Guest",
        premium: false,
        watchList: [
            {
                title: "Friends",
                episodes: 236
            }
        ]
    },
    {
        profile: "Emma",
        premium: true,
        watchList: [
            {
                title: "The Boys",
                episodes: 32
            },
            {
                title: "Wednesday",
                episodes: 8
            }
        ]
    }
];

netflix.forEach(profile => {
    console.log(profile.profile)
        profile.watchList.forEach(shows => {
            console.log(`- ${shows.title}`)
        });
});


const premiumprofiles = netflix.filter((premiumprofile)=>{
    return premiumprofile.premium
})
const premiumprofilename = premiumprofiles.map((premiumprofile)=>{
    return premiumprofile.profile
})
console.log(premiumprofilename)


const netflixdetails = netflix.reduce((total, item)=>{
    const totalshows = item.watchList.reduce((total, item)=>{
        return total + item.episodes
    }, 0)
return total + totalshows
}, 0)
console.log(netflixdetails)


const emmadetails = netflix.find((emmadetail)=>{
    return emmadetail.profile === 'Emma'
})
const Emma = emmadetails.watchList.map((emmadetail)=>{
    return emmadetail.title
})
console.log(Emma)

const morethanXeposides = netflix.some((netflixdetail)=>{
    const episodescounter = netflixdetail.watchList.some((episodescount)=>{
        return episodescount.episodes > 100
    }) 
return episodescounter
})
console.log(morethanXeposides)

const Newarray = netflix.map((netflixitems)=>{
    return {
        profile : netflixitems.profile,
        totalShows : netflixitems.watchList.length
    }
})
console.log(Newarray)
