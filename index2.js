/*
    a special number is one that is:

    1. rounded down if it has a trailing decimal
    2. cubed
*/

function getSpecialNum(n) {
    // do some stuff to get special number
    const rounded = roundDown(n);
    const cubed = cube(rounded);
    return cubed;

    //return cube(roundDown(n));    
}


function roundDown(n) {
    return Math.floor(n);
}

// TESTS
console.log(roundDown(1.00001), 1)
console.log(roundDown(1), 1)
console.log(roundDown(1.9999999), 1)

function cube(n) {
    return n ** 3;
}

// TESTS
console.log(cube(3), 27)
console.log(cube(4), 64)
console.log(cube(7), 343)

