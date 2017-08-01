require("../extras");
let Algorithms = require("./algorithms");
let algorithms = new Algorithms();
let result;

// Test 1
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);

result = algorithms.karatsuba("000000000", "1");
console.assert(result === "0", `FAILED - Expect ${result} to equal 0`);

console.log("PASSED");

// Test 2
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);

result = algorithms.karatsuba("1", "000000000");
console.assert(result === "0", `FAILED - Expect ${result} to equal 0`);

console.log("PASSED");

// Test 3
console.log(`${'-'.repeat(15)}TEST 3${'-'.repeat(15)}`);

result = algorithms.karatsuba("994759257", "928607936");
console.assert(result === "923741340459663552", `FAILED - Expect ${result} to equal 923741340459663552`);

console.log("PASSED");

// Test 4
console.log(`${'-'.repeat(15)}TEST 4${'-'.repeat(15)}`);

result = algorithms.karatsuba("994759257928607936928607936", "928607936994759257994759257994759257");
console.assert(result === "923741342311522232964972166486064359154001834843068444459663552", `FAILED - Expect ${result} to equal 923741342311522232964972166486064359154001834843068444459663552`);

console.log("PASSED");
