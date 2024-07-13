google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartMostSearched);

function drawChartMostSearched() {
var dataMostSearched = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Cuello V',54.8],
  ['Polo',48.6],
  ['Deporte',44.4]
  
]);

var optionsMostSearched = {
};

var chartMostSearched = new google.visualization.PieChart(document.getElementById('myChartMostSearched'));
  chartMostSearched.draw(dataMostSearched, optionsMostSearched);
}