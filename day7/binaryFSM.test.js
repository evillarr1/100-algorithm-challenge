require("../extras");
let BinaryFSM = require("./binaryFSM");
let binaryFSM = new BinaryFSM();
let result;

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = binaryFSM.add("", "");
console.assert(result === "0", `FAILED - Expect ${result} to equal 0`);

console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = binaryFSM.add("0", "00");
console.assert(result === "00", `FAILED - Expect ${result} to equal 00`);

console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

result = binaryFSM.add("000", "100");
console.assert(result === "100", `FAILED - Expect ${result} to equal 100`);

console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

result = binaryFSM.add("100", "100");
console.assert(result === "1000", `FAILED - Expect ${result} to equal 1000"`);

console.log("PASSED");

// Test 4
console.log(`${'-'.repeat(15)}TEST 4${'-'.repeat(15)}`);

result = binaryFSM.add("100101", "10101");
console.assert(result === "111010", `FAILED - Expect ${result} to equal 111010`);

console.log("PASSED");

// Test 5
console.log(`${'-'.repeat(15)}TEST 5${'-'.repeat(15)}`);

result = binaryFSM.add("1000111", "0010110");
console.assert(result === "1011101", `FAILED - Expect ${result} to equal 1011101`);

console.log("PASSED");

// Test 6
console.log(`${'-'.repeat(15)}TEST 6${'-'.repeat(15)}`);

result = binaryFSM.add("10010101010101010110101010101100000111", "10101100011111010101010100001001001");
console.assert(result === "10101010111001010001010101001101010000", `FAILED - Expect ${result} to equal 10101010111001010001010101001101010000`);

console.log("PASSED");