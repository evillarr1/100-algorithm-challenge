const OPERAND_LIST = ["+", "-", "*", "/"];

class Postfix {
    solve(expression) {
        if (expression.length === 0) {
            throw new Error("Expression is empty");
        }

        let result = expression.split(" ").reduce((currVals, newVal, index) => {
            let operand = OPERAND_LIST.indexOf(newVal);

            if (isNaN(newVal) && operand < 0) {
                throw new Error("Not a valid input: " + newVal);
            }

            if (operand >= 0) {
                let secondNum = currVals.pop();
                let firstNum = currVals.pop();

                // Simple check, wont allow doubles
                if (isNaN(firstNum) || isNaN(secondNum)) {
                    throw new Error("Expression is malformed, missing a number. Currently in position: " + index);
                }

                // Normally, you want to avoid using eval, but since I fully control and validate the input, it shouldn't be a problem.
                currVals.push(eval(firstNum + newVal + secondNum));
            } else {
                currVals.push(newVal);
            }

            return currVals;
        }, []);

        if (result.length > 1) {
            throw new Error("Result contains more than one value: " + result);
        }

        return result.pop();
    }
}

module.exports = Postfix;