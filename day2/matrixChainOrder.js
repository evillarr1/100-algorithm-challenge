class MatrixChainOrder {
    solve(matrix) {
        let n = matrix.length - 1;
        let m = [];
        let s = [];

        for (let i = 0; i < n; i++) {
            m[i] = new Array(n).fill(0);
            s[i] = new Array(n).fill(0);
        }

        for (let len = 1; len < n; len++) {
            for (let i = 0; i < n - len; i++) {
                let j = i + len;

                m[i][j] = Number.MAX_SAFE_INTEGER;

                for (let k = i; k < j; k++) {
                    let cost = m[i][k] + m[k + 1][j] + matrix[i] * matrix[k + 1] * matrix[j + 1];

                    if (cost < m[i][j]) {
                        m[i][j] = cost;
                        s[i][j] = k;
                    }
                }
            }
        }

        return m;
    }
}

module.exports = MatrixChainOrder;
