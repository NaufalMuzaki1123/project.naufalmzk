  // Data untuk grafik
  const labels = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    
    const data2022 = [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945];
    const data2023 = [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689];
    
    // Konfigurasi grafik menggunakan Chart.js
    const ctx = document.getElementById('salesChart').getContext('2d');
    const salesChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [
          {
            label: '2022',
            data: data2022,
            backgroundColor: 'rgba(0, 162, 0, 0.7)',
            borderColor: 'rgba(0, 162, 0, 1)',
            borderWidth: 1
          },
          {
            label: '2023',
            data: data2023,
            backgroundColor: 'rgba(255, 0, 0, 0.7)',
            borderColor: 'rgba(255, 0, 0, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            suggestedMax: 10000
          }
        }
      }
    });
    