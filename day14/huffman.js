class Huffman {
    constructor() {
        this._charMap = {};
        this._head = [];
    }

    createWeightMap(input = "") {
        this._findFrequency(input);
        this._convertToNodes();
        this._sortNodes();
        let tree = this._constructBinaryTree();

        return this._createBinaryCodeMap(tree);
    }

    compress(input = "") {
        let binaryCodeMap = this.createWeightMap(input);
        let binaryCodeString = JSON.stringify(binaryCodeMap);

        // Going for simplicity here to help with decompression, but it can be optimized much much more.
        return binaryCodeString.length + binaryCodeString + this._compressInput(input, binaryCodeMap);
    }

    decompress(input = "") {
        let binaryLength = this._readBinaryLength(input);
        let binaryCodeStr = input.slice(binaryLength.length, Number(binaryLength) + binaryLength.length);
        let binaryCodeMap = JSON.parse(binaryCodeStr);
        let invertedMap = this._invertMap(binaryCodeMap);
        let compressStr = input.slice(Number(binaryLength) + binaryLength.length);

        return this._decode(invertedMap, compressStr);
    }

    _readBinaryLength(input) {
        let len = "";

        for (let i = 0; i < input.length; i++) {
            if (isNaN(input[i])) {
                return len;
            }

            len += input[i];
        }

        return len;
    }

    _invertMap(map) {
        let newMap = {};

        Object.keys(map).forEach((key) => {
            newMap[map[key]] = key;
        });

        return newMap

    }

    _decode(binaryCodeMap, str) {
        let result = "";
        let temp = "";

        for (let i = 0; i < str.length; i++) {
            debugger;
            temp += str[i];

            if (binaryCodeMap.hasOwnProperty(temp)) {
                result += binaryCodeMap[temp];
                temp = ""
            }
        }

        return result;
    }

    _findFrequency(input) {
        this._charMap = {};

        for (let i = 0; i < input.length; i++) {
            let newChar = input[i];

            if (!this._charMap.hasOwnProperty(newChar)) {
                this._charMap[newChar] = 0;
            }

            this._charMap[newChar]++;
        }
    }

    _convertToNodes() {
        this._head = [];

        Object.keys(this._charMap).forEach((newChar) => {
            this._head.push(this._constructNewNode(newChar));
        });
    }

    _constructNewNode(newChar) {
        let newNode = new Node(newChar, this._charMap[newChar]);

        delete this._charMap[newChar];

        return newNode;
    }

    _sortNodes() {
        return this._head.sort((a, b) => a.freq - b.freq);
    }

    _constructBinaryTree() {
        if (this._head.length <= 1) {
            return this._head;
        }

        while (this._head.length > 1) {
            let firstNode = this._head.shift();
            let secondNode = this._head.shift();

            let newHead = new Node(firstNode.key + secondNode.key, firstNode.freq + secondNode.freq);

            if (firstNode.freq > secondNode.freq) {
                newHead.right = firstNode;
                newHead.left = secondNode;
            } else {
                newHead.right = secondNode;
                newHead.left = firstNode;
            }

            this._head.unshift(newHead);
            this._sortNodes(this._head);
        }

        return this._head[0];
    }

    _createBinaryCodeMap(tree, weight = "", result = {}) {
        if (!tree.left && !tree.right) {
            result[tree.key] = weight;

            return result;
        }

        if (tree.left) {
            this._createBinaryCodeMap(tree.left, weight + "0", result);
        }

        if (tree.right) {
            this._createBinaryCodeMap(tree.right, weight + "1", result);
        }

        return result;
    }

    _compressInput(input, binaryCodeMap) {
        let result = "";

        for (let i = 0; i < input.length; i++) {
            result += binaryCodeMap[input[i]];
        }

        return result;
    }
}

class Node {
    constructor(key, freq = 0) {
        this.left = null;
        this.right = null;
        this.key = key;
        this.freq = freq;
    }
}

module.exports = Huffman; 
