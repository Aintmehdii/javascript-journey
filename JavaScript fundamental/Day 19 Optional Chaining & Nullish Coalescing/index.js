// Optional Chaining & Nullish Coalscing //
const steamUser = {
    username: "Mahdi"
};
console.log(steamUser.games?.firstgame)


const laptop = {
    brand: "Apple"
};
console.log(laptop?.cpu)



const username = undefined;
console.log(username ?? 'Quest')



const price = 0;
console.log(price ?? 100)



const netflix = {
    profile: "Emma"
};
console.log(netflix?.watchlist ?? 0)
