require("../extras");
let NumberToBinary = require("./numberToBinary");
let numberToBinary = new NumberToBinary();

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

console.assert(numberToBinary.convert(5) === "101", `FAILED - 5 did not convert to binary properly, got ${numberToBinary.convert(5)}`);
console.assert(numberToBinary.convert(31) === "11111", `FAILED - 31 did not convert to binary properly, got ${numberToBinary.convert(31)}`);
console.assert(numberToBinary.convert(-1) === "11111111111111111111111111111111", `FAILED - 31 did not convert to binary properly, got ${numberToBinary.convert(-1)}`);
console.assert(numberToBinary.convert(0) === "0", `FAILED - 0 did not convert to binary properly, got ${numberToBinary.convert(0)}`);
console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);

console.assert(numberToBinary.countOnes(5) === 2, `FAILED - Got ${numberToBinary.countOnes(5)}, expect 2`);
console.assert(numberToBinary.countOnes(31) === 5, `FAILED - Got ${numberToBinary.countOnes(31)}, expect 5`);
console.assert(numberToBinary.countOnes(-1) === 32, `FAILED - Got ${numberToBinary.countOnes(-1)}, expect 32`);
console.assert(numberToBinary.countOnes(0) === 0, `FAILED - Got ${numberToBinary.countOnes(0)}, expect 0`);
console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

console.assert(numberToBinary.countZeroes(5) === 1, `FAILED - Got ${numberToBinary.countZeroes(5)}, expect 2`);
console.assert(numberToBinary.countZeroes(31) === 0, `FAILED - Got ${numberToBinary.countZeroes(31)}, expect 0`);
console.assert(numberToBinary.countZeroes(-1) === 0, `FAILED - Got ${numberToBinary.countZeroes(-1)}, expect 0`);
console.assert(numberToBinary.countZeroes(0) === 1, `FAILED - Got ${numberToBinary.countZeroes(0)}, expect 1`);
console.log("PASSED");
