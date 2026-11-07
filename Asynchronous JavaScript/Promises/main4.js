function upgradeInventory(playerName, callback) {
    const inventory = [
        { name: "AK-47", price: 1000 },
        { name: "AWP", price: 2500 },
        { name: "Glock", price: 400 },
        { name: "M4A1", price: 1800 }
    ];



    const upgradePromise = new Promise((resolve, reject) => {
        const upgradeSuccessful = true;

        if (upgradeSuccessful) {
            resolve(inventory);
        } else {
            reject("Inventory upgrade failed!");
        }
    });



    upgradePromise
        .then((items) => {
            const upgradedItems = items.filter((item) => {
                return item.price >= 1000;
            });

            callback(playerName, upgradedItems);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            console.log("Inventory upgrade process finished.");
        });
}



function showUpgradedInventory(playerName, items) {
    console.log(`${playerName}'s upgraded inventory:`);

    items.forEach((item) => {
        console.log(`${item.name} - ${item.price}`);
    });
}

upgradeInventory("Mahdi", showUpgradedInventory);
