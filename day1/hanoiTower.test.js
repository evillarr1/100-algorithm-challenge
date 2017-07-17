require("../extras");
let HanoiTower = require("./hanoiTower");


// Test 1 - manual validation
console.log(`${'-'.repeat(15)}TEST 1${'-'.repeat(15)}`);
let hanoiTower = new HanoiTower();

hanoiTower.solve();
console.log("PASSED?");

// Test 2 - check structure
console.log(`${'-'.repeat(15)}TEST 2${'-'.repeat(15)}`);
hanoiTower = new HanoiTower();

let {src, spr, tar} = hanoiTower.rods;

console.assert(src.equals([ 1, 2, 3, 4, 5 ]), "FAILED - Source has the incorrect number of disks");
console.assert(spr.equals([]), "FAILED - Spare has the incorrect number of disks");
console.assert(tar.equals([]), "FAILED - Target has the incorrect number of disks");
console.log("PASSED");

hanoiTower.solve();

console.assert(src.equals([]), "FAILED - Source has the incorrect number of disks");
console.assert(spr.equals([]), "FAILED - Spare has the incorrect number of disks");
console.assert(tar.equals([ 1, 2, 3, 4, 5 ]), "FAILED - Target has the incorrect number of disks");
console.log("PASSED");
