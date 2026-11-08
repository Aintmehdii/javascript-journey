function rankPlayers(player, callback) {
    const players = [
        { name: "Mahdi", kills: 25, wins: 8 },
        { name: "Alex", kills: 12, wins: 3 },
        { name: "John", kills: 30, wins: 10 },
        { name: "Sam", kills: 7, wins: 1 },
        { name: "David", kills: 20, wins: 6 }
    ];

    const promise = new Promise((solve, failed)=>{
        const rankingSuccessful = true
        if (rankingSuccessful) {
            solve(players)
        }else{
            failed("Could not load player rankings!")
        }
    })

    promise
        .then((items)=>{
            const playerWins = items.filter((item)=>{
                if (item.wins >= 5) {
                    return item
                }
                
            })
            const playerScores = playerWins.map((item) => {
                return {
                    name: item.name,
                    score: item.kills * 10 + item.wins * 50
                };
            });
            const sortedPlayers = playerScores.sort((a, b) => {
                return a.score - b.score;
            });

            callback(sortedPlayers)
        })

        .catch((error)=>{
            console.log(error)
        })

        .finally(()=>{
            console.log("Ranking process finished!")
        })
}





function displayRankings(rankedPlayers) {
    console.log("PLAYER RANKINGS: ")

    rankedPlayers.forEach((element, index) => {
        console.log(`${index + 1}. ${element.name} - ${element.score} points`);
    });
}

rankPlayers("player", displayRankings)
