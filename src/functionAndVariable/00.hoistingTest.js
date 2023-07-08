
/*
    "ReferenceError: * is not defined" vs undefined

    "ReferenceError" happens when you haven't declared the variable before it is used.
    "undefined" happens when a variable haven't initialized before it is used.
*/


function nonDeclaration() {
    console.log(a); // ReferenceError
}
nonDeclaration()

function varDeclareWithoutAssignment() {
    var a;
    console.log(a); // undefined
}
// varDeclareWithoutAssignment()

function varDeclareWithAssignment() {
    var a = 1
    console.log(a); // 1
}
// varDeclareWithAssignment()

function isVarHoisted() {
    console.log(a); // Undefined
    var a;
}
// isVarHoisted()

function isAssignmentHoisted() {
    var a;
    console.log(a); // Undefined
    a = 2;
}
// isAssignmentHoisted()

function isVarWithAssignmentHoisted() {
    console.log(a); // Undefined
    var a = 2;
}
// isVarWithAssignmentHoisted()

function letDeclareWithoutAssignment() {
    let a;
    console.log(a); // undefined
}
// letDeclareWithoutAssignment()

function isLetHoisted() {
    console.log(a); // ReferenceError: temporal dead zone
    let a;
}
// isLetHoisted()

function letVsVar() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar); // Foo Bar? FooBar

    {
        var moo = "Mooo";
        let baz = "Bazz";
        console.log(moo, baz); // MoooBazz? Mooo Bazz?
    }

    console.log(moo); // ReferenceError;ReferenceError // Mooo; reference error; // Mooo; Bazz
    console.log(baz); // 
}
// letVsVar()

function globalA() {
    c = 1;
}

function globalB() {
    console.log(global.c);
}
// globalA()
// globalB()

function globalC() {
    d = 1;
    var d = 2;
    console.log(d)
}

function globalD() {
    console.log(global.d)
}
// globalC()
// globalD()