require("../extras");
let mcCarthy91 = require("./mcCarthy91");
let result;

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = mcCarthy91(80);
console.assert(result === 91, `FAILED - Expect ${result} to equal 91`);

console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);

result = mcCarthy91(102);
console.assert(result === 92, `FAILED - Expect ${result} to equal 92`);

console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

result = mcCarthy91(109);
console.assert(result === 99, `FAILED - Expect ${result} to equal 99`);

console.log("PASSED");

// Test 4
console.log(`${'-'.repeat(15)}TEST 4${'-'.repeat(15)}`);

result = mcCarthy91(110);
console.assert(result === 100, `FAILED - Expect ${result} to equal 100`);

console.log("PASSED");

// Test 5
console.log(`${'-'.repeat(15)}TEST 5${'-'.repeat(15)}`);

result = mcCarthy91(201);
console.assert(result === 191, `FAILED - Expect ${result} to equal 191`);

console.log("PASSED");
