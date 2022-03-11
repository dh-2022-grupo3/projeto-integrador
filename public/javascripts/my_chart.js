const ctx = document.getElementById('myChart').getContext('2d');
const verticalBar = document.getElementById('verticalBar').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem', 'Lorem'],
    datasets: [{
      label: 'Lorem',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
    }],
  },
  options: {
    responsive: true,
  },
});

// Chart Bar

const vertical = new Chart(verticalBar, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'Lorem',
      data: [12, 19, 13, 15, 12, 10, 16, 9, 14, 8, 12, 7],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
    }],
  },
  options: {
    responsive: true,
  },
});
