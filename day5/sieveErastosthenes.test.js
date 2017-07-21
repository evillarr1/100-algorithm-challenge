require("../extras");
let SieveErastosthenes = require("./sieveErastosthenes");
let sieveErastosthenes = new SieveErastosthenes();
let result;

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = sieveErastosthenes.findAllPrimes(5);

console.assert(result === 3, `Expected ${result} to equal 3`);
console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);

result = sieveErastosthenes.findAllPrimes(7);

console.assert(result === 4, `Expected ${result} to equal 4`);
console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

result = sieveErastosthenes.findAllPrimes(8);

console.assert(result === 4, `Expected ${result} to equal 4`);
console.log("PASSED");

// Test 4
console.log(`${'-'.repeat(15)}TEST 5${'-'.repeat(15)}`);

result = sieveErastosthenes.findAllPrimes(1000);

console.assert(result === 168, `Expected ${result} to equal 168`);
console.log("PASSED");

// Test 5
console.log(`${'-'.repeat(15)}TEST 5${'-'.repeat(15)}`);

result = sieveErastosthenes.findAllPrimes(10000);

console.assert(result === 1229, `Expected ${result} to equal 1229`);
console.log("PASSED");

// Test 6
console.log(`${'-'.repeat(15)}TEST 6${'-'.repeat(15)}`);

result = sieveErastosthenes.findAllPrimes(100000);

console.assert(result === 9592, `Expected ${result} to equal 9592`);
console.log("PASSED");

// Test 7
console.log(`${'-'.repeat(15)}TEST 7${'-'.repeat(15)}`);

result = sieveErastosthenes.findAllPrimes(1000000);

console.assert(result === 78498, `Expected ${result} to equal 78498`);
console.log("PASSED");