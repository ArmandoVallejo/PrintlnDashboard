var ctx2 = document.getElementById('myChart2').getContext('2d');

var xValues2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
var yValues2 = [2,2,1,0,0,4,1,0,2,3,0,0,3,0,0,3,0,0,2,0,0,1,3,0,4,0,1,2,0,2,10];

new Chart(ctx2, {
  type: "line",
  data: {
    labels: xValues2 ,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues2
    }]
  },
  options: {
    legend: {display: false},
    title: {
        display: true,
        text: 'Visitantes en Diciembre',
      },
    scales: {
      yAxes: [{ticks: {min: 0, max:20}}],
    }
  }
});