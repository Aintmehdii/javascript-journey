const player = {
    username: "Mahdi",
    level: 55,

    showInfo() {
        console.log(`${this.username} | Level${this.level}`)
    }
};
player.showInfo();




const Steamplayer = {
    username: "Emma",
    level: 80,
    bonus: 20,

    getFinalLevel() {
        console.log(this.level + this.bonus)
    }
};
Steamplayer.getFinalLevel();





const laptop1 = {
    brand: "Apple",
    ram: 32,

    showSpecs() {
        console.log(`${this.brand} | ${this.ram}GB`)
    }
};

const laptop2 = {
    brand: "Asus",
    ram: 16,

    showSpecs() {
        console.log(`${this.brand} | ${this.ram}GB`)
    }
};
laptop1.showSpecs();
laptop2.showSpecs();




const user = {
    username: "Mahdi",
    premium: true,

    showStatus() {
        if (!this.premium) {
            console.log(`${this.username} | Regular`)
        } else{
            console.log(`${this.username} ⭐ Premium`)
        }
    }
};
user.showStatus();




const CS2player = {
    username: "Mahdi",
    level: 55,

    getName() {
        return this.username
    },

    showPlayer() {
        console.log(`${this.getName()} | Level ${this.level}`)
    }
};
CS2player.showPlayer();





const CODplayer = {
    username: "Mahdi",
    level: 55,
    hours: 450,
    premium: true,

    getLevel() {
        return this.level
    },

    getHours() {
        return this.hours
    },

    getStatus() {
        return this.premium
    },

    showProfile() {
        if (this.getStatus()) {
            console.log(`${this.username} | Level ${this.getLevel()} | ${this.getHours()}h | Premium ⭐`)
        } else{
            console.log(`${this.username} | Level ${this.getLevel()} | ${this.getHours()}h | Regular user`)
        }
    }
};
CODplayer.showProfile();
