google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartLeastSearched);

function drawChartLeastSearched() {
var dataLeastSearched = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Cuello V',54.8],
  ['Polo',48.6],
  ['Deporte',44.4]
]);

var optionsLeastSearched = {
  title:'Least Serched'
};

var chartLeastSearched = new google.visualization.PieChart(document.getElementById('myChartLeastSearched'));
  chartLeastSearched.draw(dataLeastSearched, optionsLeastSearched);
}