import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DataChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (data.length === 0) return;

    const ctx = chartRef.current.getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
          datasets: [
            {
              label: 'Energia Gerada (Volts)',
              data: data,
              borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo
              pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Cor dos marcadores
              pointBorderColor: 'rgba(75, 192, 192, 1)', // Cor das bordas dos marcadores
              pointRadius: 6, // Tamanho dos marcadores
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });      
  }, [data]);

  return (
    <div className="data-chart">
        <canvas ref={chartRef} className="chart-canvas" />
    </div>
  );
};

export default DataChart;