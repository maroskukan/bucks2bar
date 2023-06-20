// array of 12 random numbers between 200 and 1000
var expenses = [200, 300, 400, 500, 600, 700, 800, 900, 1000, 200, 300, 400];
// array of 12 random numbers between 2000 and 9500
var income = [
  2505, 3500, 4500, 5500, 5500, 3000, 8500, 9500, 2000, 3000, 4000, 5000,
];

// on window load, create chart js bar chart for id myChart
window.onload = function () {
  // set input value for januaryIncome to income[0], repeat for every month
  document.getElementById('januaryIncome').value = income[0];
  document.getElementById('februaryIncome').value = income[1];
  document.getElementById('marchIncome').value = income[2];
  document.getElementById('aprilIncome').value = income[3];
  document.getElementById('mayIncome').value = income[4];
  document.getElementById('juneIncome').value = income[5];
  document.getElementById('julyIncome').value = income[6];
  document.getElementById('augustIncome').value = income[7];
  document.getElementById('septemberIncome').value = income[8];
  document.getElementById('octoberIncome').value = income[9];
  document.getElementById('novemberIncome').value = income[10];
  document.getElementById('decemberIncome').value = income[11];

  // set input value for januaryExpenses to expenses[0], repeat for every month
  document.getElementById('januaryExpenses').value = expenses[0];
  document.getElementById('februaryExpenses').value = expenses[1];
  document.getElementById('marchExpenses').value = expenses[2];
  document.getElementById('aprilExpenses').value = expenses[3];
  document.getElementById('mayExpenses').value = expenses[4];
  document.getElementById('juneExpenses').value = expenses[5];
  document.getElementById('julyExpenses').value = expenses[6];
  document.getElementById('augustExpenses').value = expenses[7];
  document.getElementById('septemberExpenses').value = expenses[8];
  document.getElementById('octoberExpenses').value = expenses[9];
  document.getElementById('novemberExpenses').value = expenses[10];
  document.getElementById('decemberExpenses').value = expenses[11];

  // function to get income values for all months and return as array
  function getIncomeValues() {
    var januaryIncome = document.getElementById('januaryIncome').value;
    var februaryIncome = document.getElementById('februaryIncome').value;
    var marchIncome = document.getElementById('marchIncome').value;
    var aprilIncome = document.getElementById('aprilIncome').value;
    var mayIncome = document.getElementById('mayIncome').value;
    var juneIncome = document.getElementById('juneIncome').value;
    var julyIncome = document.getElementById('julyIncome').value;
    var augustIncome = document.getElementById('augustIncome').value;
    var septemberIncome = document.getElementById('septemberIncome').value;
    var octoberIncome = document.getElementById('octoberIncome').value;
    var novemberIncome = document.getElementById('novemberIncome').value;
    var decemberIncome = document.getElementById('decemberIncome').value;

    var incomeValues = [
      januaryIncome,
      februaryIncome,
      marchIncome,
      aprilIncome,
      mayIncome,
      juneIncome,
      julyIncome,
      augustIncome,
      septemberIncome,
      octoberIncome,
      novemberIncome,
      decemberIncome,
    ];

    return incomeValues;
  }

  // function to get expense values for all months and return as array
  function getExpenseValues() {
    var januaryExpenses = document.getElementById('januaryExpenses').value;
    var februaryExpenses = document.getElementById('februaryExpenses').value;
    var marchExpenses = document.getElementById('marchExpenses').value;
    var aprilExpenses = document.getElementById('aprilExpenses').value;
    var mayExpenses = document.getElementById('mayExpenses').value;
    var juneExpenses = document.getElementById('juneExpenses').value;
    var julyExpenses = document.getElementById('julyExpenses').value;
    var augustExpenses = document.getElementById('augustExpenses').value;
    var septemberExpenses = document.getElementById('septemberExpenses').value;
    var octoberExpenses = document.getElementById('octoberExpenses').value;
    var novemberExpenses = document.getElementById('novemberExpenses').value;
    var decemberExpenses = document.getElementById('decemberExpenses').value;

    var expenseValues = [
      januaryExpenses,
      februaryExpenses,
      marchExpenses,
      aprilExpenses,
      mayExpenses,
      juneExpenses,
      julyExpenses,
      augustExpenses,
      septemberExpenses,
      octoberExpenses,
      novemberExpenses,
      decemberExpenses,
    ];

    return expenseValues;
  }

  // get canvas element
  var canvas = document.getElementById('myChart');
  var ctx = canvas.getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'Income',
          data: getIncomeValues(),
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
        {
          label: 'Expenses',
          data: getExpenseValues(),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value, index, values) {
              return '$ ' + value;
            },
            beginAtZero: true,
          },
        },
      },
    },
  });

  // click handler for chart-tab
  document.getElementById('chart-tab').addEventListener('click', function () {
    myChart.data.datasets[0].data = getIncomeValues();
    myChart.data.datasets[1].data = getExpenseValues();
    myChart.update();
  });

  window.addEventListener('resize', function () {
    myChart.resize();
  });

  // download function
  document.getElementById('download').addEventListener('click', function () {
    var download = document.getElementById('download');
    var image = canvas.toDataURL('image/png');
    download.setAttribute('href', image);
    download.setAttribute('download', 'chart.png');
  });
};
