class Person {
    constructor(address, hobbies) {
        this.address = address
        this.hobbies = hobbies
    }

    hello() {

    }
}

function printPersonStreet(person) {
    console.log(person.address.street) // this will not check if the person undefined
}

let addressContext = {
    street: "ncu road 300"
}

let hobbiesContext = []

const nathan = new Person(addressContext, hobbiesContext)

//printPersonStreet(nathan)


function printPersonStreetWithAndMark(person) {
    console.log(person && person.address && person.address.street)
}

function printPersonStreetWithQuestionMark(person) {
    console.log(person?.address?.street)
}

printPersonStreetWithAndMark(nathan)
printPersonStreetWithQuestionMark(nathan)


function printHobbies(person) {
    console.log(person.hobbies?.[0])
}

function helloTest(person) {
    person.hello?.()
}

//printHobbies(nathan)

helloTest(nathan)
