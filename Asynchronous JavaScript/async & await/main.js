function findMatch() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Match found!");
        }, 2000);
    });
}

async function startGame() {
    console.log("Searching for a match...");

    const result = await findMatch();

    console.log(result);
    console.log("Joining server...");
}

startGame();




function findUser() {
    return new Promise((solve, fail)=>{
        const userPremium = true
        if (userPremium) {
            setTimeout(() => {
                solve("User is premium!")
            }, 4000);
        }else {
            setTimeout(() => {
                fail("User is regular!")
            }, timeout);
        }
    })
}

async function printUser() {
    console.log("Checking user details...")
    const result = await findUser()

    console.log(result)
    console.log("Welcome!")
}

setTimeout(() => {
    printUser()
}, 4000);




function searchMatch() {
        return new Promise((resolve)=>{
        setTimeout(() => {  
            resolve("CS2 match found!") }, 2000);
        })
}

async function playCS2() {
    console.log("Searching for a match...")

    const result = await searchMatch()

    console.log(result)
    console.log("Connecting to server...")
}

playCS2()
