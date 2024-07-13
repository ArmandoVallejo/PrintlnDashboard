google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartMostVisited);

function drawChartMostVisited() {
var dataMostVisited = google.visualization.arrayToDataTable([
  ['Product', 'Sales', { role: 'annotation' }, { role: 'link' }],
  ['Product A', 100, 'Product A', 'https://google.com'],
  ['Product B', 90, 'Product B', 'https://example.com/productB'],
  ['Product C', 80, 'Product C', 'https://example.com/productC'],
  ['Product D', 70, 'Product D', 'https://example.com/productD'],
  ['Product E', 60, 'Product E', 'https://example.com/productE']
]);

var optionsMostVisited = {
  
};

var chartMostVisited = new google.visualization.BarChart(document.getElementById('myChartMostVisited'));
  chartMostVisited.draw(dataMostVisited, optionsMostVisited);
}



