require("../extras");
let Search = require("./search");
let search = new Search();
let result;

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = search.binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 9);
console.assert(result === -1, `FAILED - Expect ${result} to equal -1`);

console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = search.binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 9);
console.assert(result === -1, `FAILED - Expect ${result} to equal -1`);

console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

result = search.binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 0);
console.assert(result === 0, `FAILED - Expect ${result} to equal 0`);

console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

result = search.binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 16);
console.assert(result === 8, `FAILED - Expect ${result} to equal -1`);

console.log("PASSED");

// Test 4
console.log(`${'-'.repeat(15)}TEST 4${'-'.repeat(15)}`);

result = search.binarySearch([0, 2, 4, 6, 8, 10, 12, 14, 16], 8);
console.assert(result === 4, `FAILED - Expect ${result} to equal 4`);

console.log("PASSED");

// Test 5
console.log(`${'-'.repeat(15)}TEST 5${'-'.repeat(15)}`);

result = search.binarySearch([].range(0, 1000000), 1234);
console.assert(result === 1234, `FAILED - Expect ${result} to equal 1234`);

console.log("PASSED");

// Test 6
console.log(`${'-'.repeat(15)}TEST 6${'-'.repeat(15)}`);

result = search.binarySearch([].range(1000, 1000000), 999999);
console.assert(result === 998999, `FAILED - Expect ${result} to equal 998999`);

console.log("PASSED");