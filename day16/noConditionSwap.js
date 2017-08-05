function swap(x, y) {
    let s = x < y

    return [x * s + y * (1 - s), y * s + x * (1 - s)];
}

module.exports = swap;