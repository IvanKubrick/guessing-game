class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.assump = Math.ceil( (this.max + this.min) / 2 );
      return this.assump;
    }

    lower() {
      this.max = this.assump;
    }

    greater() {
      this.min = this.assump;
    }
}

module.exports = GuessingGame;