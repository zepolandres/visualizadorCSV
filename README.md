# visualizadorCSV
Carga del Archivo CSV: Los usuarios suben un archivo CSV con columnas de Fecha, Post, Positividad, Negatividad y Neutralidad. El proyecto procesa estos datos y muestra la evolución de los sentimientos en una gráfica de tiempo.

Procesamiento de Datos: Utiliza PapaParse para analizar y convertir el contenido del archivo CSV en un formato adecuado para su visualización.

Lógica de Visualización: Se utiliza la biblioteca  Chart.js para mostrar los datos en un gráfico de líneas, permitiendo la visualización de la evolución de los sentimientos a lo largo del tiempo.



## Clona este repositorio en tu máquina local utilizando el siguiente comando:
```
git clone https://github.com/zepolandres/visualizadorCSV.git 
```

## Navega hasta el directorio del proyecto
```
cd visualizadorcsv
```


## Instala las dependencias del proyecto utilizando npm:
```
npm install
```

### Ejecución del Proyecto
Una vez que hayas instalado las dependencias, puedes ejecutar el proyecto utilizando el siguiente comando:
```
npm run serve
```

Esto iniciará un servidor local y podrás acceder al visualizador de datos CSV en tu navegador visitando la dirección http://localhost:8080

### Compila para producción
```
npm run build
```


### Proceso de Carga y Procesamiento de Datos CSV


#### El usuario carga un archivo CSV utilizando un input de tipo archivo en CargarArchivo.vue
```
<input type="file" accept=".csv" @change="importCSV">
```


#### En el método importCSV, se lee el archivo y se parsea con PapaParse.
```
import Papa from 'papaparse';
reader.onload = () => {
    const data = Papa.parse(reader.result, { header: true }).data;
    this.$emit('csv-loaded', data);
};
```


#### Procesamiento de datos CSV:

Los datos CSV parseados se emiten utilizando el evento csv-loaded.
```
this.$emit('csv-loaded', data);
```
Se reciben los datos en MostrarGrafico.vue como una propiedad llamada csvData.

#### Lógica de visualización:

En MostrarGrafico.vue, los datos CSV se utilizan para generar una gráfica de líneas con Chart.js

```
new Chart(ctx, {
    type: 'line',
    data: { ... },
    options: { ... }
});
```

Se crean datasets para representar diferentes aspectos del sentimiento a lo largo del tiempo.
La gráfica se renderiza en un elemento canvas en el DOM.
```
<canvas ref="chartCanvas"></canvas>
```
