require("../extras");
let Postfix = require("./postfix");
let postfix = new Postfix();
let result;

// Test 0
console.log(`${'-'.repeat(15)}TEST 0${'-'.repeat(15)}`);

try {
	postfix.solve("");
	console.assert(false, "FAILED - Should have thrown an Error");
} catch (e) {
	console.assert(e.message === "Expression is empty", `FAILED - Expected error to equal "Expression is empty"`);
}

console.log("PASSED");

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

try {
	postfix.solve(0);
	console.assert(false, "FAILED - Should have thrown an Error");
} catch (e) {
	console.assert(e.message === "expression.split is not a function", `FAILED - Expected error to equal "expression.split is not a function"`);
}

console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);

result = postfix.solve("0");
console.assert(result === "0", "FAILED - Result should equal 0, but got: " + result);

console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

try {
	result = postfix.solve("0 a");
	console.assert(false, "FAILED - Should have thrown an Error");
} catch (e) {
	console.assert(e.message === "Not a valid input: a", `FAILED - Expected error to equal "Not a valid input: a"`);
}

console.log("PASSED");

// Test 4
console.log(`${'-'.repeat(15)}TEST 4${'-'.repeat(15)}`);

result = postfix.solve("1 2 +");
console.assert(result === 3, "FAILED - Result should have resulted in 3, got: " + result);

console.log("PASSED");

// Test 5
console.log(`${'-'.repeat(15)}TEST 5${'-'.repeat(15)}`);

result = postfix.solve("1 2 -");
console.assert(result === -1, "FAILED - Result should have resulted in -1, got: " + result);

console.log("PASSED");

// Test 6
console.log(`${'-'.repeat(15)}TEST 6${'-'.repeat(15)}`);

try {
	result = postfix.solve("1 2 + +");
	console.assert(false, "FAILED - Should have thrown an Error");
} catch (e) {
	console.assert(e.message === "Expression is malformed, missing a number. Currently in position: 3", `FAILED - Expected error to equal "Expression is malformed, missing a number. Currently in position: 3"`);
}

console.log("PASSED");

// Test 7
console.log(`${'-'.repeat(15)}TEST 7${'-'.repeat(15)}`);

result = postfix.solve("5 1 2 + 4 * + 3 -");
console.assert(result === 14, "FAILED - Result should have resulted in 14, got: " + result);

console.log("PASSED");

// Test 8
console.log(`${'-'.repeat(15)}TEST 8${'-'.repeat(15)}`);

result = postfix.solve("1 2 + 4 3 - + 10 5 / *");
console.assert(result === 8, "FAILED - Result should have resulted in 8, got: " + result);

console.log("PASSED");