// Spread Operator //
const games = ["CS2", "Valorant", "Minecraft"];
const gamescopy = [...games];
console.log(gamescopy)



const fps = ["CS2", "Valorant"];
const story = ["RDR2", "Cyberpunk"];
const mergefpsandstory = [...fps, ...story, 'Elden Ring'];
console.log(mergefpsandstory)



const user = {
    name: "Mahdi",
    age: 20
};
const copyuser = {...user}
console.log(copyuser);




const basic = { name: "Mahdi" };
const extra = { premium: true };
const mergedbasicandextra = {...basic, ...extra};
console.log(mergedbasicandextra);
// =============================================================== //




// Rest Operator //
const steamgames = [
    "CS2",
    "Valorant",
    "Minecraft",
    "RDR2"
];
const [firstgame, ...othersGames] = steamgames
console.log(firstgame, othersGames)





const steamuser = {
    name: "Mahdi",
    age: 20,
    premium: true,
    country: "Afghanistan"
};
const {name, ...details} = steamuser;
console.log(name, details)
// =============================================================== //
