export class RandomGenerator {

    static randomInteger() {
        return Math.ceil(Math.random() * 100)
    }

    static randomRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    static randomColor() {
        return {
            red: 'rgb(255, 99, 132)',
            orange: 'rgb(255, 159, 64)',
            yellow: 'rgb(255, 205, 86)',
            green: 'rgb(75, 192, 192)',
            blue: 'rgb(54, 162, 235)',
            purple: 'rgb(153, 102, 255)',
            grey: 'rgb(201, 203, 207)'
        };
    }
}