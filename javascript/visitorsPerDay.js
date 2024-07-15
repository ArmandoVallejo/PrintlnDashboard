var ctx3 = document.getElementById('myChart3').getContext('2d');

var xValues3 = ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00","24:00"];
var yValues3 = [0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
new Chart(ctx3, {
  type: "line",
  data: {
    labels: xValues3 ,
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
      yAxes: [{ticks: {min: 0, max:10}}],
    }
  }
});