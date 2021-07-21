/*
    "Declare(declaration)": it means that you use "var", "let", "const" a variable.
    For instance, let a;

    "Initialize(initialization)": it means that you assign something to a variable for the first time in a scope.
    For instance,

    let a = 1;
    a= 2 // reassign
*/

/*
    Javascript variables are loosely typed,
    which means you can assign any type of value to a variable.

    let a = 1
    a = "123"

    Scope of the variables declared without var keyword become global irrespective of where it is declared.
    Global variables can be accessed from anywhere in the web page

    a = 1
*/

// var => scope: module, function, class
// let, const => scope: 大括號

/*
    Hoisting: Hoisting is JavaScript's default behavior of moving declarations to the top.
    JavaScript Declarations are Hoisted.
    JavaScript Initializations are Not Hoisted.

    Using a let variable before it is declared will result in a ReferenceError.
    The variable is in a "temporal dead zone" from the start of the block until it is declared.
*/

/*
    "ReferenceError: * is not defined" vs undefined

    "ReferenceError" happens when you haven't declared the variable before it is used.
    "undefined" happens when a variable haven't initialized before it is used.
*/
