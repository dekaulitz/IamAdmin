export class RandomGenerator {

    static randomInteger() {
        return Math.ceil(Math.random() * 100)
    }

    static randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    static randomColor() {
        return 'rgb(' + this.randomRange(1, 255) + ',' + this.randomRange(1, 255) + ',' + this.randomRange(1, 255) + ')';
    }
}