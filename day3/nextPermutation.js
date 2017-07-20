class NextPermutation {
	solve(values) {
		return this._longestDecreasingSequence(values);
	}

	_longestDecreasingSequence(values) {
		let splitValues = values.split("");
		let head = 0,
			count = 1,
			newHead = 0,
			newCount = 1;

		for (let i = 1; i < splitValues.length; i++) {
			if (splitValues[i] <= splitValues[i - 1]) {
				newCount++;
			} else {
				if (newCount > count) {
					count = newCount;
					head = newHead;
				}

				newHead = i;
				newCount = 0;
			}
		}

		if (newCount > count) {
			count = newCount;
			head = newHead;
		}

		if (head !== 0) {
			this._swapValues(splitValues, head, count);
		}

		this._reverseTail(splitValues, head, count);

		return splitValues.join("");
	}

	_swapValues(values, head, count) {
		let temp = values[head - 1];
		let smallestValue = head + count;

		values[head - 1] = values[smallestValue];
		values[smallestValue] = temp;
	}

	_reverseTail(values, head, count) {
		let tailValue = values.splice(head, count + 1);

		values.splice(head, 0, tailValue.reverse().join(""));
	}
}

module.exports = NextPermutation;
