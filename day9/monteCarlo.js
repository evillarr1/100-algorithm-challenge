class MonteCarlo {
  generatePII(num) {
    let inSquare = 0;
    let inCircle = 0;
    
    for (let i = 0; i < num; i++) {
      let x = Math.random() * num;
      let y = Math.random() * num;
      
      inCircle += Math.sqrt(Math.pow(num - x, 2) + Math.pow(num - y, 2)) <= num;
      inSquare++;
    }
    
    return 4 * inCircle / inSquare;
  }
}

module.exports = MonteCarlo;
