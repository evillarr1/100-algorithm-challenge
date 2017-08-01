function McCarthy91(num) {
    if (num > 100) {
        num -= 10;
    } else {
        num += 11;
    }
	
    return num;
}

module.exports = McCarthy91;
