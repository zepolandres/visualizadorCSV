<template>
    <div id="mainFrame">
      <h1>Visualizar Sentimientos CSV</h1>
      <Estilos />
      <CargarArchivo @csv-loaded="handleCSVLoaded" />
      <MostrarGrafico :csv-data="csvData" v-if="csvData" />
    </div>
  </template>
  
  <script>
  //Importamos los componentes de Carga del CSV y el de  Mostrar el grafico
import CargarArchivo from '@/components/CargarArchivo.vue'; 
import MostrarGrafico from '@/components/MostrarGrafico.vue'; 

export default {
  components: {
    CargarArchivo,
    MostrarGrafico
  },
  data() {
    return {
      csvData: null // Inicializa csvData como null para almacenar los datos del CSV cargados
    }
  },
  methods: {
    // Maneja  la carga de datos CSV
    handleCSVLoaded(data) {
      this.csvData = data; // Guarda los datos CSV cargados en csvData
    }
  }
}
</script>

  