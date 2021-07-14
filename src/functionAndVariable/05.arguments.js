function myFunction() {
    console.log(arguments);
}

myFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }

function myRegularFunction() {
    const myArrowFunction = () => {
        console.log(arguments);
    }

    myArrowFunction('c', 'd');
}

myRegularFunction('a', 'b'); // logs { 0: 'a', 1: 'b', length: 2 }


function myRestArgsRegularFunction() {
    const myArrowFunction = (...args) => {
        console.log(args);
    }

    myArrowFunction('c', 'd');
}

myRestArgsRegularFunction('a', 'b'); // logs ['c', 'd']

