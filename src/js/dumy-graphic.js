/*
generating dummy config
 */
import {RandomGenerator} from "./util/random-generator";

let pieChartData = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                RandomGenerator.randomInteger(),
                RandomGenerator.randomInteger(),
                RandomGenerator.randomInteger(),
                RandomGenerator.randomInteger(),
                RandomGenerator.randomInteger(),
            ],
            backgroundColor: [
                RandomGenerator.randomColor().red,
                RandomGenerator.randomColor().orange,
                RandomGenerator.randomColor().yellow,
                RandomGenerator.randomColor().green,
                RandomGenerator.randomColor().blue,
            ],
            label: 'Dataset 1'
        }],
        labels: [
            "Red",
            "Orange",
            "Yellow",
            "Green",
            "Blue"
        ]
    },
    options: {
        responsive: true
    }
};
let pieChart = document.getElementById("pieChart").getContext("2d");


let barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: 'Dataset 1',
            backgroundColor: RandomGenerator.randomColor().red,
            data: [RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger()]
        },
        {
            label: 'Dataset 2',
            backgroundColor: RandomGenerator.randomColor().blue,
            data: [RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger()]
        }
    ]
};

let ctx = document.getElementById("barChart").getContext("2d");
window.myPie = new Chart(pieChart, pieChartData);
window.myBar = new Chart(ctx, {
    responsive: true,
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart'
        }
    }
});
