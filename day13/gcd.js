function gcd(x, y) {
	let [u0, u1, v0, v1] = [1, 0, 0, 1];

	while (y > 0) {
		let q = Math.floor(x / y);
		let temp;

		temp = u0;
		u0 = u1;
		u1 = temp - (q * u1);

		temp = v0;
		v0 = v1;
		v1 = temp - (q * v1);

		temp = y;
		y = x % y;
		x = temp;
	}

	return [x, u0, v0];
}

module.exports = gcd;
