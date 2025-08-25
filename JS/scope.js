// function outer() {
//     let a = 10;

//     function inner() {
//         console.log(a); // Where is "a" accessible?
//     }
//     inner();
// }

// outer();

// console.log(a); // Will this work? Why or why not?

function testScope() {
    if (true) {
        let x = 'block scope';
        var y = 'function scope';
    }
    console.log(y); // Will this work?
    // console.log(x); // Will this work?
}

testScope();

