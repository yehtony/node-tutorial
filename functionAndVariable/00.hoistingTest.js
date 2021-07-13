function nonDeclaration() {
    console(a);
}

function varDeclareWithoutAssignment() {
    var a;
    console.log(a);
}

function varDeclareWithAssignment() {
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

function isVarWithAssignmentHoisted() {
    console.log(a);
    var a = 2;
}

function letDeclareWithoutAssignment() {
    let a;
    console.log(a);
}

function isLetHoisted() {
    console.log(a);
    let a;
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

function globalA() {
    c = 1;
}

function globalB() {
    console.log(global.c);
}

function globalC() {
    d = 1;
    var d = 2;
    console.log(d)
}

function globalD() {
    console.log(global.d)
}
