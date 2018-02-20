var chart = graphic.chart;
var random = graphic.RandomGenerator;
var pieChartData = {
    type: 'pie',
    data: {
        datasets: [{
            data: [
                random.randomInteger(),
                random.randomInteger(),
                random.randomInteger(),
                random.randomInteger(),
                random.randomInteger(),
            ],
            backgroundColor: [
                random.randomColor(),
                random.randomColor(),
                random.randomColor(),
                random.randomColor(),
                random.randomColor(),
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
var barChartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: 'Dataset 1',
            backgroundColor: random.randomColor(),
            data: [random.randomInteger(), random.randomInteger(), random.randomInteger(), random.randomInteger(), random.randomInteger(), random.randomInteger(), random.randomInteger()]
        },
        {
            label: 'Dataset 2',
            backgroundColor: random.randomColor(),
            data: [random.randomInteger(), random.randomInteger(), random.randomInteger(), random.randomInteger(), random.randomInteger(), random.randomInteger(), random.randomInteger()]
        }
    ]
};

var ctx = document.getElementById("barChart").getContext("2d");
window.myPie = new chart(pieChart, pieChartData);
window.myBar = new chart(ctx, {
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