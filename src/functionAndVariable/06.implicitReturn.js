function myFunction() {
    return 42;
}

myFunction(); // => 42

function myEmptyFunction() {
    42;
}

function myEmptyFunction2() {
    42;
    return;
}

console.log(myEmptyFunction());  // => undefined
console.log(myEmptyFunction2()); // => undefined

const increment = (num) => num + 1;

console.log(increment(41)); // => 42

const increment2 = (num) => { num + 1 };

console.log(increment2(42))