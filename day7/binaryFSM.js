// States
const STATES = {
    "000": {carry: 0, result: 0},
    "001": {carry: 0, result: 1},
    "010": {carry: 0, result: 1},
    "011": {carry: 1, result: 0},
    "100": {carry: 0, result: 1},
    "101": {carry: 1, result: 0},
    "110": {carry: 1, result: 0},
    "111": {carry: 1, result: 1}
};

class BinaryFSM {
    add(firstNum, secondNum) {
        let currState = "000";

        if (firstNum.length === 0 || secondNum.length === 0) {
            return "0";
        }

        let first = firstNum;
        let second = secondNum;

        if (first.length !== second.length) {
            let diffLen = Math.abs(first.length - second.length);

            if (first.length < second.length) {
                first = this._padLeft(first, diffLen);
            } else {
                second = this._padLeft(second, diffLen);
            }
        }

        let total = "";

        for (let i = first.length - 1; i >= 0; i--) {
            let newState = first[i] + second[i] + STATES[currState].carry;

            currState = newState;
            total = STATES[newState].result + total;
        }

        if (STATES[currState].carry) {
            total = STATES[currState].carry + total;
        }

        return total;
    }

    _padLeft(str, diffLen) {
        return "0".repeat(diffLen) + str;
    }
}

module.exports = BinaryFSM;
