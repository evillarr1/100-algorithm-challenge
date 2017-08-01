require("../extras");

class Algorithms {
    // Perform all the one digit multiplications, in all the possible combinations
    _multiply(first, second) {
        for (let i = 0; i < first.length; i++) {
            for (let j = 0; j < second.length; j++) {
                this.result[i + j] += first[i] * second[j];
            }
        }
    }

    // Perform the final addition that properly computes all the carries
    _cyclicConvolution() {
        for (let i = this.result.length - 1; i > 0; i--) {
            let strNum = String(this.result[i]);
            let remainder = strNum.slice(0, strNum.length - 1) || 0;

            this.result[i] = strNum[strNum.length - 1];
            this.result[i - 1] += parseInt(remainder);
        }

        this.result.reduce((prev, next) => `${prev}${next}`, "");
    }

    _removeExtraZeroes() {
        let zeroIndex = this.result.findIndex((val) => val != 0);

        this.result = this.result.slice(zeroIndex);
    }

    karatsuba(first, second) {
        if (first.length !== second.length) {
            if (first.length > second.length) {
                second = second.padLeft("0", first.length - second.length);
            } else {
                first = first.padLeft("0", second.length - first.length);
            }
        }

        this.result = new Array(2 * first.length - 1).fill(0);

        this._multiply(first, second);
        this._cyclicConvolution();
        this._removeExtraZeroes();

        return this.result.join("");
    }
}

module.exports = Algorithms;
