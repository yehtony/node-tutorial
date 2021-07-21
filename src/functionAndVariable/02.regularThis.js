/* 
    Comparison of 'this' Value between Regular function and Arrow Function
*/

function myFunction(args) {
    console.log(this);
    console.log(args)
}

// Simple invocation
myFunction(); // logs global object (window)
// During a simple invocation the value of this equals to the global object 
// (or undefined if the function runs in strict mode);

// Simple invocation when callback
setTimeout(myFunction, 1000)

// Indirect invocation
const myContext = { value: 'A' };

myFunction.call(myContext, 1, 2, 3);  // logs { value: 'A' }
myFunction.apply(myContext, [1, 2, 3]); // logs { value: 'A' }
// key: js call vs apply

// Method invocation
const myObject = {
    method() {
        console.log(this);
    }
};
myObject.method(); // logs myObject

// constructor invocation
function MyFunction() {
    console.log(this);
}
new MyFunction(); // logs an instance of MyFunction

/*
class A:
    def __init__(self):
        print(self)

A()
*/