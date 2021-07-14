/* 
    Comparison of 'this' Value between Regular function and Arrow Function
*/

function myFunction() {
    console.log(this);
}

// Simple invocation
myFunction(); // logs global object (window)
// During a simple invocation the value of this equals to the global object 
// (or undefined if the function runs in strict mode);

const myObject = {
    method() {
        console.log(this);
    }
};
// Method invocation
myObject.method(); // logs myObject


// Indirect invocation
const myContext = { value: 'A' };

myFunction.call(myContext);  // logs { value: 'A' }
myFunction.apply(myContext); // logs { value: 'A' }

// constructor invocation
function MyFunction() {
    console.log(this);
}
new MyFunction(); // logs an instance of MyFunction

