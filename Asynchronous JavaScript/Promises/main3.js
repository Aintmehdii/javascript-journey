function completeMission(playerName, callback) {
    const missionPromise = new Promise((resolve, reject) => {
        const mission = true;

        if (mission) {
            resolve(500);
        } else {
            reject("Mission failed!");
        }
    });

    missionPromise
        .then((reward) => {
            callback(playerName, reward);
        })
        .catch((message) => {
            console.log(message);
        })
        .finally(() => {
            console.log("Mission process finished.");
        });
}

function giveReward(playerName, reward) {
    console.log(`${playerName} completed the mission!`);
    console.log(`${playerName} received ${reward} XP!`);
}

completeMission("Mahdi", giveReward);
