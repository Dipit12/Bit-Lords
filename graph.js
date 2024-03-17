function generateLineData(count) {
    const data = [];
    let value = Math.random() * 10;
    for (let i = 0; i < count; i++) {
      value += Math.random() * 10 - 5;
      data.push(value);
    }
    return data;
  }

  const initialData = generateLineData(100);

  const ctx = document.getElementById('lineChart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: initialData.length }, (_, i) => i),
      datasets: [{
        data: initialData,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderColor: 'white',
        borderWidth: 2,
        pointBackgroundColor: 'white',
        pointBorderColor: 'white',
        pointRadius: 3
      }]
    },
    options: {
      scales: {
        x: {
          type: 'linear',
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        },
        y: {
          ticks: {
            color: 'white'
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.2)'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  setInterval(() => {
    const newData = generateLineData(1);
    chart.data.labels.push(chart.data.labels.length);
    chart.data.datasets[0].data.push(newData[0]);
    chart.update();
  }, 1000);