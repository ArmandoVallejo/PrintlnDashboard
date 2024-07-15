google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartLeastVisited);

function drawChartLeastVisited() {
var dataLeastVisited = google.visualization.arrayToDataTable([
  ['Product', 'Sales', { role: 'annotation' }, { role: 'link' }],
  ['Product A', 100, 'Product A', 'https://google.com'],
  ['Product B', 90, 'Product B', 'https://example.com/productB'],
  ['Product C', 80, 'Product C', 'https://example.com/productC'],
  ['Product D', 70, 'Product D', 'https://example.com/productD'],
  ['Product E', 60, 'Product E', 'https://example.com/productE']
]);

var optionsLeastVisited = { 
};

var chartLeastVisited = new google.visualization.BarChart(document.getElementById('myChartLeastVisited'));
  chartLeastVisited.draw(dataLeastVisited, optionsLeastVisited);
}



