let userBalance = 0;

const buyBtn = document.querySelector("#buyBtn");
const receipt = document.querySelector("#receipt");
const status = document.querySelector("#status");
const balanceDisplay = document.querySelector("#balance");

function checkBalance() {
    return new Promise((solve) => {
        setTimeout(() => {
            userBalance += 100;
            solve(userBalance);
        }, 500);
    });
}

function purchaseGame(balance) {
    return new Promise((solve, reject) => {
        setTimeout(() => {
            if (balance >= 40) {
                solve("Purchase successful!");
            } else {
                reject("Not enough money!");
            }
        }, 1000);
    });
}

function downloadGame() {
    return new Promise((solve) => {
        setTimeout(() => {
            solve("Game downloaded successfully!");
        }, 2000);
    });
}

async function buyGame() {
    buyBtn.disabled = true;
    receipt.textContent = "";

    status.textContent = "Checking balance...";

    const balance = await checkBalance();

    balanceDisplay.textContent = `Balance: $${balance}`;

    if (balance < 40) {
        status.textContent = "Not enough money!";
        buyBtn.disabled = false;
        return;
    }

    const purchase = await purchaseGame(balance);

    status.textContent = purchase;

    userBalance -= 40;
    balanceDisplay.textContent = `Balance: $${userBalance}`;

    const download = await downloadGame();

    status.textContent = download;

    receipt.textContent =
        `Purchase successful! Current balance: $${userBalance}`;

    buyBtn.disabled = false;
}

buyBtn.addEventListener("click", buyGame);
