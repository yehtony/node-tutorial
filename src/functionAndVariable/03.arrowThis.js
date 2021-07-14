/*
    Comparison of 'this' Value between Regular function and Arrow Function
*/

const myObject = {
    myMethod(items) {
        console.log("outside the callback", this); // logs myObject
        const callback = () => {
            console.log("in the callback:", this); // logs myObject
        };
        items.forEach(callback);
    },
    anotherMethod(items) {
        console.log("outside the callback:", this); // logs myObject
        items.forEach(() => {
            console.log("in the callback:", this); // logs myObject
        });
    }
};

myObject.myMethod([1, 2, 3]);
myObject.anotherMethod([1, 2, 3])