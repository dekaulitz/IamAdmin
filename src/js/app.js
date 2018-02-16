import 'jquery'
import 'chart.js'
import 'popper.js'
import 'bootstrap'
//import 'font-awesome/scss/font-awesome.scss';
import '../scss/stylesheet.scss'
import '../dashboard.html'
import {RandomGenerator} from "./random-generator";

// const outputParagraph = $("#outputParagraph");
// const outputRandomInt = () => {
//     outputParagraph.text(RandomGenerator.randomInteger());
// };
// const outputRandomRange = function () {
//     outputParagraph.text(RandomGenerator.randomRange(1, 1000));
// };
// const buttonRandInt = jQuery("#randomInt");
// const buttonRandRange = document.querySelector("#randomRange");
//
// buttonRandInt.click(outputRandomInt);
// buttonRandRange.addEventListener('click', outputRandomRange);
var color = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
};
var pieChartData = {
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
                color.red,
                color.orange,
                color.yellow,
                color.green,
                color.blue,
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
var pieChart = document.getElementById("pieChart").getContext("2d");
window.myPie = new Chart(pieChart, pieChartData);


var barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: 'Dataset 1',
            backgroundColor: color.red,
            data: [RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger()]
        },
        {
            label: 'Dataset 2',
            backgroundColor: color.blue,
            data: [RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger(), RandomGenerator.randomInteger()]
        }
    ]
};

var ctx = document.getElementById("barChart").getContext("2d");
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
