// Select the parent element for the chart
const parent1 = document.querySelector('h3');

// Create a div element to hold the chart
const datas1 = document.createElement('div');
parent1.appendChild(datas1);

// Create a canvas element for the chart
const canva1 = document.createElement('canvas');
datas1.appendChild(canva1);

// Select all rows from the table
const table1_full = document.getElementById('table1');
const t1_tr = table1_full.querySelectorAll('tbody tr');

// Arrays to store extracted data
const labels = [];
const data = [];

// Iterate over each row to extract data
t1_tr.forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length > 0) {
        labels.push(cells[0].innerText); // Extract category (first cell)
        data.push(parseFloat(cells[1].innerText)); // Extract value (second cell) and convert to number
    }
});

// Create the chart using Chart.js
const ctx = canva1.getContext('2d'); // Use the created canvas element
new Chart(ctx, { // Use the Chart constructor
    type: 'bar', // You can change the chart type here
    data: {
        labels: labels,
        datasets: [{
            label: 'Values',
            data: data,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


var datasrc = "https://canvasjs.com/services/data/datapoints.php";
const parent3 = document.getElementById('firstHeading'); //parent sosu lequel il faut taper le graph
const datas3 = document.createElement('div'); //creation de la zone du graph
parent3.appendChild(datas3); //ajout de la zone du graph sous le titre
const canva3 = document.createElement('canvas'); //creation du graph
datas3.appendChild(canva3); //ajout du graph a sa zone dédiée

