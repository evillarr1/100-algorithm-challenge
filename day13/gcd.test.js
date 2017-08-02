require("../extras");
let gcd = require("./gcd");
let result;
let expect;

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = gcd(151, 100);
expect = [1, -49, 74];
console.assert(result.equals(expect), `FAILED - Expect ${result} to equal ${expect})`);

console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);

result = gcd(2*3*7*9*11, 6*12*13);
expect = [18, -9, 40];
console.assert(result.equals(expect), `FAILED - Expect ${result} to equal ${expect})`);

console.log("PASSED");
