String.prototype.padLeft = function (char, diffLen) {
    return char[0].repeat(diffLen) + this.valueOf();
};
