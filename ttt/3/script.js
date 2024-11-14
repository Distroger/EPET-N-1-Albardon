document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('miningChartSanJuan').getContext('2d');

    // Crear un gradiente de color azul para el gráfico
    let gradientOro = ctx.createLinearGradient(0, 0, 0, 400);
    gradientOro.addColorStop(0, 'rgba(28, 146, 210, 1)');  // Azul claro
    gradientOro.addColorStop(1, 'rgba(66, 193, 225, 0.3)'); // Celeste

    let gradientPlata = ctx.createLinearGradient(0, 0, 0, 400);
    gradientPlata.addColorStop(0, 'rgba(94, 206, 255, 1)');  // Celeste claro
    gradientPlata.addColorStop(1, 'rgba(136, 206, 255, 0.3)'); // Azul suave

    let gradientCobre = ctx.createLinearGradient(0, 0, 0, 400);
    gradientCobre.addColorStop(0, 'rgba(28, 146, 210, 0.5)');  // Azul medio
    gradientCobre.addColorStop(1, 'rgba(94, 206, 255, 0.3)'); // Azul más claro

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', 'Ene 2024', 'Feb 2024', 'Mar 2024', 'Abr 2024', 'May 2024', 'Jun 2024', 'Jul 2024', 'Ago 2024', 'Sep 2024', 'Oct 2024'],
            datasets: [
                {
                    label: 'Producción de Oro (Toneladas)',
                    data: [100, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210, 220, 230, 240, 250, 260],
                    backgroundColor: gradientOro,
                    borderColor: 'rgba(28, 146, 210, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(28, 146, 210, 1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Producción de Plata (Toneladas)',
                    data: [300, 320, 310, 330, 340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450],
                    backgroundColor: gradientPlata,
                    borderColor: 'rgba(94, 206, 255, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(94, 206, 255, 1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Producción de Cobre (Toneladas)',
                    data: [450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560, 570, 580, 590, 600],
                    backgroundColor: gradientCobre,
                    borderColor: 'rgba(28, 146, 210, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(28, 146, 210, 1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: 'rgba(28, 146, 210, 1)',
                        font: {
                            size: 14
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    backgroundColor: 'rgba(28, 146, 210, 0.8)',
                    titleFont: { size: 16 },
                    bodyFont: { size: 14 },
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: 'rgba(28, 146, 210, 1)'
                    }
                },
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(200, 200, 200, 0.2)'
                    },
                    ticks: {
                        color: 'rgba(28, 146, 210, 1)'
                    }
                }
            }
        }
    });
});
