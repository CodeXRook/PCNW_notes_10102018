// function declaration
function fifthPow$(num) {
    return num ** 5;
}

// function expression - anon
const fifthPow$$ = function(num) {

};

// NAMED function expression
const fifthPow$$$ = function someRandomNamelol(num) {

}

// function expression - anon 
const fifthPow = (num) => {
    return num ** 5;
};

const fifthPow$$$$ = num => num ** 5;
const nthPow = (num, n) => num ** n;
/*
function nthPow(num, n) {
    return num ** n;
}
*/

console.log(fifthPow(2)) // 32
