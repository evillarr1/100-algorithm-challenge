class HanoiTower {
    constructor(height = 5) {
        this.rods = {
            src: [],
            spr: [],
            tar: []
        };

        // Lock down the rods so they can't be removed/added.
        Object.seal(this.rods);

        this._init(height);
    }

    solve() {
        this._move(this.rods.src.length, this.rods.src, this.rods.spr, this.rods.tar)
    }

    _init(height) {
        // Start the count at 1, makes more logical sense.
        for (let i = 1; i <= height; i++) {
            this.rods.src.push(i);
        }

        this._print();
    }

    _print() {
        let {src, spr, tar} = this.rods;
        console.log(`Source: ${src} | Spare: ${spr} | Target: ${tar}`);
    }

    _move(n, source, spare, target) {
        if (n) {
            this._move(n - 1, source, target, spare);
            target.push(source.pop());
            this._print();
            this._move(n - 1, spare, source, target);
        }
    }
}

module.exports = HanoiTower;
