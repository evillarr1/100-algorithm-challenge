class NumberToBinary {
	convert(val) {
		return (val >>> 0).toString(2);
	}
	
	countOnes(val) {
		let binaryVal = this.convert(val);
		
		return this._countX(binaryVal, "1");
	}

	countZeroes(val) {
		let binaryVal = this.convert(val);
		
		return this._countX(binaryVal, "0");
	}
	
	_countX(binary, num) {
		let total = 0;
		
		for (let i = 0; i < binary.length; i++) {
			total += binary[i] === num;
		}
		
		return total;
	}
}

module.exports = NumberToBinary;
