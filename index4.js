// hoisting - javascript will first
// try and find function declarations BEFORE
// handling function invocations

console.log(a()); // 1?

function a() {
    return 1;
}

console.log(b());

// expression
const b = function b() {
    return 2;
}
