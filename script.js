/*          
            First Exercice
*/

var divFirstChart = document.createElement("div");
var parentFirstChart = document.querySelector("h3").parentNode;
parentFirstChart.insertBefore(divFirstChart, document.querySelector("#table1"));

const firstCanvas = document.createElement("canvas");
divFirstChart.appendChild(firstCanvas);
const ctxFirst = firstCanvas.getContext("2d");

var tableOffence = document.getElementById("table1");

var tableRowsFirst = tableOffence.querySelectorAll("tr");
tableRowsFirst = Array.from(tableRowsFirst).slice(1);

var tableColumnsFirst;
var countryFirst;
var yearFirst;
var dataFirst;
var datasetFirst;

var labelsFirst = [];
var dataPerYearFirst = {};

var colorsFirst = ['black','purple','yellow','green','blue','red','cyan','magenta','orange','pink','lime',];

tableRowsFirst.forEach(function (rowFirst) {
    tableColumnsFirst = rowFirst.querySelectorAll("td");
    if (tableColumnsFirst.length > 2) {
        countryFirst = tableColumnsFirst[0].textContent;
        labelsFirst.push(countryFirst);
    }

    for (var i = 1; i < tableColumnsFirst.length; i++) {
        yearFirst = 2002 + i - 1;
        dataFirst = parseFloat(tableColumnsFirst[i].textContent.replace(',','.'));
        if (!dataPerYearFirst[yearFirst]) {
            dataPerYearFirst[yearFirst] = [];
        }
        dataPerYearFirst[yearFirst].push(dataFirst);
    }
});

var myFirstChart = new Chart(ctxFirst, {
    type: "bar",
    data: {
        labels: labelsFirst,
        datasets: []
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var colorIndexFirst = 0;

for (var yearFirst in dataPerYearFirst) {
    datasetFirst = {
        label: yearFirst,
        data: dataPerYearFirst[yearFirst],
        backgroundColor: colorsFirst[colorIndexFirst],
    };
    myFirstChart.data.datasets.push(datasetFirst);
    colorIndexFirst +=1;
}

myFirstChart.update();

/* 
            Second Exercice
*/

var divSecondChart = document.createElement("div");
parentFirstChart.insertBefore(divSecondChart, document.querySelector("#table2"));

const secondCanvas = document.createElement("canvas");
divSecondChart.appendChild(secondCanvas);
const ctxSecond = secondCanvas.getContext("2d");

var tablePrison = document.getElementById("table2");

var tableRowsSecond = tablePrison.querySelectorAll("tr");
tableRowsSecond = Array.from(tableRowsSecond).slice(1);

var tableColumnsSecond;
var countrySecond;
var dateSecond;
var dataSecond;
var datasetSecond;

var labelsSecond = [];
var dataPerYearSecond = {};

tableRowsSecond.forEach(function (rowSecond) {
    tableColumnsSecond = rowSecond.querySelectorAll("td");
    if (tableColumnsSecond.length > 2) {
        countrySecond = tableColumnsSecond[0].textContent.replace('\n', ' ');
        labelsSecond.push(countrySecond);
    }

    for (var i = 1; i < tableColumnsSecond.length; i++) {
        if (i == 1)
            dateSecond = "2007 - 09";
        else
            dateSecond = "2010 - 12"
        dataSecond = parseFloat(tableColumnsSecond[i].textContent.replace(',','.'));
        if (!dataPerYearSecond[dateSecond]) {
            dataPerYearSecond[dateSecond] = [];
        }
        dataPerYearSecond[dateSecond].push(dataSecond);
    }
});

var mySecondChart = new Chart(ctxSecond, {
    type: "bar",
    data: {
        labels: labelsSecond,
        datasets: []
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

var colorIndexSecond = 0;

for (var dateSecond in dataPerYearSecond) {
    datasetSecond = {
        label: dateSecond,
        data: dataPerYearSecond[dateSecond],
        backgroundColor: colorsFirst[colorIndexSecond],
    };
    mySecondChart.data.datasets.push(datasetSecond);
    colorIndexSecond = (1 + colorIndexSecond) % colorsFirst.length;
}

mySecondChart.update();

/* 
            Third Exercice
*/

var thirdChart;

var divThirdChart = document.createElement("div");
var parentThirdChart = document.querySelector("h1").parentNode;
parentThirdChart.insertBefore(divThirdChart, document.querySelector("#bodyContent"));

const thirdCanvas = document.createElement("canvas");
thirdCanvas.width = 10;
divThirdChart.appendChild(thirdCanvas);
const ctxThird = thirdCanvas.getContext("2d");

var dataPoints = [];

var myChartThird = new Chart(ctxThird, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Data Points',
            data: dataPoints,
            fill: false,
            borderColor: 'blue',
            tension: 0.1
        }]
    },
});

function fetchData() {
    var url = "https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1]) + "&length=1&type=json";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                dataPoints.push(data[0][1]);
                myChartThird.data.labels.push(data[0][0]);
                myChartThird.update();
            }
            console.log(dataPoints)
        })
        .catch(error => console.error("Error fetching data: " + error));

    setTimeout(fetchData, 1000);
}

fetchData(); 