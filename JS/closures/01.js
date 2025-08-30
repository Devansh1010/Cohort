function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter()
console.log(counter1()); // What’s the output?
console.log(counter2()); // And now?
console.log(counter2()); // And now?
console.log(counter2()); // And now?
console.log(counter1()); // And now?
