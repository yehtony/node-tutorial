// Function declaration
function greetDeclaration(who) {
    return `Hello, ${who}!`;
}

// Function expression
const greetExpression = function (who) {
    return `Hello, ${who}!`;
}

// Arrow function expression ES6(ES2015)
const greetArrow = (who) => {
    return `Hello, ${who}!`;
}

console.log(greetDeclaration("Nathan"))
console.log(greetExpression("Nathan"))
console.log(greetArrow("Nathan"))

hoisted();

function hoisted() {
    console.log('This function has been hoisted.');
};

/*
expression(); //Output: "TypeError: expression is not a function

var expression = function () {
    console.log('Will this work?');
};
*/

expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
    console.log('Will this work?');
};