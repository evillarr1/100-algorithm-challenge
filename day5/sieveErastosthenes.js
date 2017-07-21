class SieveEratosthenes {
    findAllPrimes(val) {
        if (!Number.isInteger(val)) {
            throw new Error("Expected type number, but got type: " + typeof val);
        }

        let numList = new Array(val + 1).fill(true);
        let totalPrimes = 0;

        let i = 2;

        for (let i = 2; i < val; i++) {
            if (numList[i]) {
                for (let j = i + i; j <= val; j += i) {
                    numList[j] = false;
                }
            }
        }

        for (let i = 2; i < numList.length; i++) {
            totalPrimes += numList[i]
        }

        return totalPrimes;
    }
}


module.exports = SieveEratosthenes;
