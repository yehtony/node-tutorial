function nonDeclaration() {
    console(a);
}

function varDeclare() {
    var a;
    console.log(a);
}

function varDeclareAndAssign() {
    var a = 1
    console.log(a);
}

function isVarHoisted() {
    console.log(a);
    var a;
}

function isAssignmentHoisted() {
    var a;
    console.log(a);
    a = 2;
}

function isVarAndAssignmentHoisted() {
    console.log(a);
    var a = 2;
}

function letVsVar() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar);

    {
        var moo = "Mooo"
        let baz = "Bazz";
        console.log(moo, baz);
    }

    console.log(moo);
    console.log(baz);
}

//letVsVar()

function functionE() {
    let a = 1;
    console.log(a);
}

function functionF() {
    let a;
    console.log(a);
}

function functionG() {
    console.log(a);
    let a;
}

function functionH() {
    console.log(a);
}

function functionI() {

}