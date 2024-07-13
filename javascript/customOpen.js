google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartMostSearched);

function drawChartMostSearched() {
var dataCustomOpen = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Pendientes',24.8],
  ['Completos',48.6],  
]);

var optionsCustomOpen = {
};

var chartCustomOpen = new google.visualization.PieChart(document.getElementById('myChartCustomOpen'));
  chartCustomOpen.draw(dataCustomOpen, optionsCustomOpen);
}