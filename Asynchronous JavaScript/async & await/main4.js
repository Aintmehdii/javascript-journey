function checkBalance() {
    return new Promise((solve)=>{
        setTimeout(() => {
            solve(userBalance =+ 100)
        }, 1000);
    })
}

function purchaseGame(balance) {
    return new Promise((solve, reject)=>{
        setTimeout(() => {
            if (balance >= 40) {
                solve("Purchase successful!")
            }else {
                reject("Not enough money!")
            }
        }, 2000);
    })
}

function downloadGame() {
    return new Promise((solve)=>{
        setTimeout(() => {
            solve("Game downloaded successfully!")
        }, 3000);
    })
}

async function butGame() {
    console.log("Checking balance...")
    const Balance = await checkBalance()
    console.log(Balance)

    const purchase = await purchaseGame(userBalance)
    console.log(purchase)

    const download = await downloadGame()
    console.log(download)
    console.log("Enjoy your game!")
}

butGame()


const buyBtn = document.querySelector("#buyBtn")
const receipt = document.querySelector("#receipt")

buyBtn.addEventListener("click", async()=>{
    await purchaseGame(userBalance -= 40)
    receipt.textContent = `$100 purchase successfull, current balance: ${userBalance}`
        buyBtn.disabled = true
})
