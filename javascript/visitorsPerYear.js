const ctx = document.getElementById('myChart').getContext('2d');

const xValues = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
const yValues = [70,80,80,90,90,90,100,110,140,140,150,140];

new Chart(ctx, {
  type: "line",
  data: {
    labels: xValues ,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
        display: true,
        text: 'Visitantes en   2024',
      },
    scales: {
      yAxes: [{ticks: {min: 0, max:200}}],
    }
  }
});