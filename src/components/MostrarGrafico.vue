<template>
    <div>
      <h3 class="chooseH2">Análisis de Sentimientos a lo largo del Tiempo</h3>
      <canvas class="canvas" ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import Chart from 'chart.js/auto'; // biblioteca Chart.js para crear gráficos
  
  export default {
      props: {
          // Recibimos  los datos del CSV para mostrar en el gráfico
          csvData: {
              type: Array,
              required: true
          }
      },
      mounted() {
          // Método que se ejecuta cuando el componente se monta en el DOM y crea el grafico
          this.createChart(); 
      },
      watch: {
          // detecta cambios en los datos CSV
          csvData: {
              handler() {
                  this.createChart(); // Crea el gráfico nuevamente cuando los datos cambian
              },
              deep: true 
          }
      },
      methods: {
          // Método para crear el gráfico
          createChart() {
              // Obtiene las etiquetas de tiempo del CSV
              const labels = this.csvData.map(row => row.Fecha);
              
              // Obtiene el context del canvas
              const canvas = this.$refs.chartCanvas;
              const ctx = canvas.getContext('2d');
              
              // Destruye el gráfico existente si hay uno
              if (this.chartInstance) {
                  this.chartInstance.destroy();
              }
              
              // Crea un nuevo gráfico con los datos actualizados
              this.chartInstance = new Chart(ctx, {
                  type: 'line', 
                  data: {
                      labels, 
                      datasets: [
                          {
                              label: 'Positividad', 
                              data: this.csvData.map(row => row.Positividad), 
                              borderColor: 'rgb(255, 99, 132)', 
                              backgroundColor: 'rgba(255, 99, 132, 0.2)', 
                              fill: false 
                          },
                          {
                              label: 'Negatividad', 
                              data: this.csvData.map(row => row.Negatividad), 
                              borderColor: 'rgb(54, 162, 235)', 
                              backgroundColor: 'rgba(54, 162, 235, 0.2)', 
                              fill: false 
                          },
                          {
                              label: 'Neutralidad', 
                              data: this.csvData.map(row => row.Neutralidad),
                              borderColor: 'rgb(75, 192, 192)', 
                              backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                              fill: false 
                          }
                      ]
                  },
                  options: {
                      responsive: true // Hace que el gráfico sea responsivo
                  }
              });
          }
      }
  }
  </script>
  
  <style>

  </style>
  