require("../extras");
let NextPermutation = require("./nextPermutation");
let nextPermutation = new NextPermutation();
let result;

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = nextPermutation.solve("218765");

console.assert(result === "251678", `Expected ${result} to equal '251678'`);
console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);
result = nextPermutation.solve("2187659");

console.assert(result === "2516789", `Expected ${result} to equal '2516789'`);
console.log("PASSED");
