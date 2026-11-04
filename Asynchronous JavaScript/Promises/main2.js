function findMatch(callback) {
    const matchFound = true

    const matchDetails = new Promise((found, failed)=>{
        if (matchFound) {
            found("Match found! Joining server...")
        }else {
            failed("No match found. Try again!")
        }
    })
    
    matchDetails   
        .then((message)=>{
            callback(message)
        })

        .catch((message)=>{
            console.log(message)
        })

        .finally(()=>{
            console.log("Matchmaking finished.")
        })
}




function showMatch(message) {
    console.log(`CS2 SYSTEM: ${message}`)
}

findMatch(showMatch)
