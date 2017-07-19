require("../extras");
let MatrixChainOrder = require("./matrixChainOrder");

const FINAL_RESULT = [ [ 0, 60, 27, 35, 69 ],
  [ 0, 0, 15, 21, 50 ],
  [ 0, 0, 0, 10, 49 ],
  [ 0, 0, 0, 0, 14 ],
  [ 0, 0, 0, 0, 0 ] ];

// Test 1 - manual validation
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);
let matrixChainOrder = new MatrixChainOrder();

let result = matrixChainOrder.solve([4, 3, 5, 1, 2, 7]);

console.assert(result.equals(FINAL_RESULT), "FAILED - Matrix did not equal the final result");
console.log("PASSED");
