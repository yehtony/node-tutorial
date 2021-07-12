/*
    Comparison of 'this' Value between Regular function and Arrow Function
*/

const myObject = {
    myMethod(items) {
        console.log(this); // logs myObject
        const callback = () => {
            console.log(this); // logs myObject
        };
        items.forEach(callback);
    }
};

myObject.myMethod([1, 2, 3]);