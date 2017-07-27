require("../extras");
let MonteCarlo = require("./monteCarlo");
let monteCarlo = new MonteCarlo();
let result;

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = monteCarlo.generatePII(10);
result = (result).toString().substring(0, 3);
console.assert(result !== "3.1", `FAILED - Expect ${result} to not equal 3.14`);

console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);

result = monteCarlo.generatePII(Math.pow(10, 5));
result = (result).toString().substring(0, 3);
console.assert(result === "3.1", `FAILED - Expect ${result} to equal 3.1`);

console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

result = monteCarlo.generatePII(Math.pow(10, 8));
result = (result).toString().substring(0, 5);
console.assert(result === "3.141", `FAILED - Expect ${result} to equal 3.141`);

console.log("PASSED");
