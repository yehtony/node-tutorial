class Hero {
    constructor(heroName) {
        this.heroName = heroName;
    }

    logName() {
        console.log(this.heroName);
    }

    arrowLogName = () => {
        console.log(this.heroName);
    }
}

const batman = new Hero('Batman');

console.log(batman.logName())

setTimeout(batman.logName, 1000);
// after 1 second logs "undefined"

setTimeout(batman.logName.bind(batman), 1000);
// after 1 second logs "Batman"

setTimeout(batman.arrowLogName, 1000);
// after 1 second logs "Batman"
