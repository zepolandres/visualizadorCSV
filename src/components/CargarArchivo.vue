<template>
  <!-- Contenedor principal -->
  <div class="dataImport">
    <div class="nextAction mt-2" id="nextAction">
      <!-- Input de archivo personalizado -->
      <label for="fileInput" class="custom-file-upload">
        Seleccione Archivo CSV
        <input id="fileInput" type="file" accept=".csv" @change="importCSV" style="display: none;">
      </label>
    </div>
  </div>
</template>

<script>
import Papa from 'papaparse'; // Librería para analizar el CSV

export default {
  methods: {
    // Método para importar el CSV seleccionado
    importCSV(event) {
      const file = event.target.files[0]; // Obtiene el archivo seleccionado
      if (file && file.type === 'text/csv') { // Verifica si es un archivo CSV
        const reader = new FileReader();
        reader.onload = () => {
          // Parsea el contenido del archivo CSV
          const data = Papa.parse(reader.result, { header: true }).data;
          // Emite un evento con los datos analizados
          this.$emit('csv-loaded', data);
        };
        reader.readAsText(file); // Lee el contenido del archivo como texto
      } else if (file) { // Si no es un archivo CSV, muestra una alerta
        alert('Error: Cargue un archivo CSV');
      }
    }
  }
}
</script>

<style scoped>
.dataImport {
  text-align: center;
}

.custom-file-upload {
  border: 2px solid #007bff;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
}

.custom-file-upload:hover {
  background-color: #0056b3;
}

#fileInput {
  display: none;
}
</style>
