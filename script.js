const parent1 = document.getElementById('firstHeading'); //parent sosu lequel il faut taper le graph
const datas1 = document.createElement('div'); //creation de la zone du graph
parent1.appendChild(datas); //ajout de la zone du graph sous le titre
const canva1 = document.createElement('canvas'); //creation du graph
datas.appendChild(canva); //ajout du graph a sa zone dédiée

new Chart(canva, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
const parent = document.getElementById('firstHeading'); //parent sosu lequel il faut taper le graph
const datas = document.createElement('div'); //creation de la zone du graph
parent.appendChild(datas); //ajout de la zone du graph sous le titre
const canva = document.createElement('canvas'); //creation du graph
datas.appendChild(canva); //ajout du graph a sa zone dédiée

