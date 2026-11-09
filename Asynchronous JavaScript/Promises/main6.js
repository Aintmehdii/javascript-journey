const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const musicShow = document.querySelector("#musicShow")

let finishTimer
let clearTimer

function spotifyPlaylist(name, callback) {
    const playlist = [
        "Shook Ones, Pt. II",
        "I got five on it",
        "When I grow up",
        "Chin Check N.W.A"
    ]

    const playlistPromise = new Promise((solve, failed)=>{
        if (playlist.includes(name)) {
            solve("Found!")
        }else {
            failed("Music not found!")
        }
    })

    playlistPromise
        .then(()=>{
            musicShow.textContent = `${name} found!`;
        })

        .catch((error)=>{
            musicShow.textContent = error
        })

        .finally(()=>{
            callback()
        })
}

function endProcess() {
    finishTimer = setTimeout(() => {
        musicShow.textContent = "Process finished!";

        clearTimer = setTimeout(() => {
            musicShow.textContent = "";
        }, 3000);

    }, 3000);
}


btn.addEventListener("click", () => {
    clearTimeout(finishTimer);
    clearTimeout(clearTimer);

    spotifyPlaylist(input.value.trim(), endProcess);
});
