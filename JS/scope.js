function outer() {
    let a = 10;

    function inner() {
        console.log(a); // Where is "a" accessible?
    }
    inner();
}

outer();

console.log(a); // Will this work? Why or why not?

let a = 0;
