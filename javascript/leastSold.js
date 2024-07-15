google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartLeastSold);

function drawChartLeastSold() {
var dataLeastSold = google.visualization.arrayToDataTable([
  ['Product', 'Sales', { role: 'annotation' }, { role: 'link' }],
  ['Product A', 100, 'Product A', 'https://google.com'],
  ['Product B', 90, 'Product B', 'https://example.com/productB'],
  ['Product C', 80, 'Product C', 'https://example.com/productC'],
  ['Product D', 70, 'Product D', 'https://example.com/productD'],
  ['Product E', 60, 'Product E', 'https://example.com/productE']
]);

var optionsLeastSold = {
  title:'Least Sold Products'
};

var chartLeastSold = new google.visualization.BarChart(document.getElementById('myChartLeastSold'));
  chartLeastSold.draw(dataLeastSold, optionsLeastSold);
}



