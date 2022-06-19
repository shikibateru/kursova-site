$(document).ready(function() {

  // Fakes the loading setting a timeout
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 2500);

});

const pieChart = {
  chart: null,
  data: [
    ['Product', 'Sales'],
    ['Laptops', 1708],
    ['Desktops', 1457],
    ['Cameras', 660],
    ['Phones', 1507],
    ['Accessories', 768]
  ],
  element: '#pie-chart',
  options: {
    title: '2019 Units Sold',
    width: 500,
    height: 300
  }
};

const barChart = {
  chart: null,
  data: [
    ['Product', 'Sales'],
    ['Laptops', 1708],
    ['Desktops', 1457],
    ['Cameras', 660],
    ['Phones', 1507],
    ['Accessories', 768]
  ],
  element: '#bar-chart',
  options:  {
    title: '2019 Units Sold',
    width: 500,
    height: 300
  }
};

const lineChart = {
  chart: null,
  data: [
    ['Year', 'Sales'],
    ['2015', 5752],
    ['2016', 5621],
    ['2017', 5876],
    ['2018', 6585],
    ['2019', 6100]
  ],
  element: '#line-chart',
  options: {
    title: 'Total Units Sold History',
    width: 500,
    height: 300
  }
};

// https://developers.google.com/chart/interactive/docs/gallery/piechart
// https://developers.google.com/chart/interactive/docs/gallery/barchart
// https://developers.google.com/chart/interactive/docs/gallery/linechart
// https://developers.google.com/chart/interactive/docs/reference#draw
// https://developers.google.com/chart/interactive/docs/reference#arraytodatatable
const init = () => {
  pieChart.chart = new google.visualization.PieChart(
    document.querySelector(pieChart.element)
  );
  pieChart.chart.draw(
    google.visualization.arrayToDataTable(pieChart.data),
    pieChart.options
  );

  barChart.chart = new google.visualization.BarChart(
    document.querySelector(barChart.element)
  );
  barChart.chart.draw(
    google.visualization.arrayToDataTable(barChart.data),
    barChart.options
  );

  lineChart.chart = new google.visualization.LineChart(
    document.querySelector(lineChart.element)
  );
  lineChart.chart.draw(
    google.visualization.arrayToDataTable(lineChart.data),
    lineChart.options
  );
};

// https://developers.google.com/chart/interactive/docs/quick_start
google.charts.load('current', {
  packages: ['corechart'],
  callback: init
});

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
document.querySelector('#update-pie-chart').addEventListener('click', () => {
  pieChart.data = [
    ['Product', 'Sales'],
    ['Laptops', 1508],
    ['Desktops', 1497],
    ['Cameras', 360],
    ['Phones', 1790],
    ['Accessories', 518]
  ];
  pieChart.chart.draw(
    google.visualization.arrayToDataTable(pieChart.data),
    pieChart.options
  );

  barChart.data = [
    ['Product', 'Sales'],
    ['Laptops', 1508],
    ['Desktops', 1497],
    ['Cameras', 360],
    ['Phones', 1790],
    ['Accessories', 518]
  ];
  barChart.chart.draw(
    google.visualization.arrayToDataTable(pieChart.data),
    barChart.options
  );
});


document.querySelector('#update-pie-chart-your-info').addEventListener('click', () => {
    let name1 = prompt('Write name of product');
    let product1 = prompt('Write amount of product');
    const prod1 = parseInt(product1);
    let name2 = prompt('Write name of product');
    let product2 = prompt('Write amount of product');
    const prod2 = parseInt(product2);
    let name3 = prompt('Write name of product');
    let product3 = prompt('Write amount of product');
    const prod3 = parseInt(product3);
    let name4 = prompt('Write name of product');
    let product4 = prompt('Write amount of product');
    const prod4 = parseInt(product4);
    let name5 = prompt('Write name of product');
    let product5 = prompt('Write amount of product');
    const prod5 = parseInt(product5);
  pieChart.data = [
    ['Product', 'Sales'],
    [name1, prod1],
    [name2, prod2],
    [name3, prod3],
    [name4, prod4],
    [name5, prod5]
  ];
  pieChart.chart.draw(
    google.visualization.arrayToDataTable(pieChart.data),
    pieChart.options
  );

  barChart.data = [
    ['Product', 'Sales'],
    [name1, prod1],
    [name2, prod2],
    [name3, prod3],
    [name4, prod4],
    [name5, prod5]
  ];
  barChart.chart.draw(
    google.visualization.arrayToDataTable(pieChart.data),
    barChart.options
  );
});

// function changeincome(){
//   var a = 6000000;
//   .money1 = a;
// }

const button = document.querySelector(but1.element);

but1.onclick = function() {
  document.getElementById("p1").innerHTML = 6500000;
  document.getElementById("p2").innerHTML = 3500000;
  document.getElementById("p3").innerHTML = 150000;
  document.getElementById("p4").innerHTML = 1.71;
  document.getElementById("p5").innerHTML = 2500000;
}

const button1 = document.querySelector(but13.element);

but13.onclick = function() {
  let income = prompt('Write your total income?(БЕЗ ком,крапок та пробілів.Приклад:6000000)');
  document.getElementById("p1").innerHTML = income;
  let expenses = prompt('Write your total expenses?(БЕЗ ком,крапок та пробілів.Приклад:2500000)');
  document.getElementById("p2").innerHTML = expenses;
  let items = prompt('Write your total sold items?(БЕЗ ком,крапок та пробілів.Приклад:6000000)');
  document.getElementById("p3").innerHTML = items;
  document.getElementById("p4").innerHTML = income/expenses;
  document.getElementById("p5").innerHTML = income-expenses;
}
