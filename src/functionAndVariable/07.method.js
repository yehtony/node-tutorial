class Hero {
    constructor(heroName) {
        this.heroName = heroName;
        this.bindLogName = this.logName.bind(this);
    }

    logName() {
        console.log(this)
        console.log(this.heroName);
    }

    arrowLogName = () => {
        console.log(this.heroName);
    }

    logFunction() {
        this.logName()
    }
}

class Hero2 {
    constructor(heroName) {
        this.heroName = heroName;
    }
    arrowLogName = () => {
        console.log(this.heroName);
        let arrowLogName2 = () => {
            console.log(this)
        }
        arrowLogName2()
    }
}
/*
const batman = new Hero('Batman');

console.log(batman.logName())

setTimeout(batman.logName, 1000);
// after 1 second logs Timeout and logs "undefined"

setTimeout(batman.logName.bind(batman), 1000);
// after 1 second logs "Batman"

setTimeout(batman.bindLogName, 1000);
// after 1 second logs "Batman"

setTimeout(batman.arrowLogName, 1000);
// after 1 second logs "Batman"

setTimeout(batman.logFunction, 1000);
// after 1 second logs "Batman"

*/
const batman2 = new Hero2('Batman');
setTimeout(batman2.arrowLogName, 1000);