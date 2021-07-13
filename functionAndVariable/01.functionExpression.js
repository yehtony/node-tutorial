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

// "Function delaration" and "Function expression" are literally the same
// while arrow function is quite different from them.

// I'm going to categorize Function delaration and Function expression as "regular function"

// However, there is still a crucial difference 
// between function declaration and function expression, which you should know.

// The difference between declaring functional component using function 
// or const would be the same as the difference between functional expressions and functional declaration.

// For instance Function declarations load before any code is executed 
// while Function expressions load only when the interpreter reaches that line of code. 

// i.e rendering a functional component created using function syntax can be done 
// before it is defined in the code while if its defined using expression then it needs to be declared before using.

// So in short function declarations are hoisted whereas function expressions are not
// In terms of using both the above syntaxes to create components you can use either as long as you use hoisting into account
// What is hoisting: https://www.w3schools.com/js/js_hoisting.asp
// Function hoisting: https://www.digitalocean.com/community/tutorials/understanding-hoisting-in-javascript
// Arrow function: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

hoisted(); // Output: "This function has been hoisted."

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