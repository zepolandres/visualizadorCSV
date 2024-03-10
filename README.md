Visualizador de Sentimientos de Posts en CSV
Esta aplicacion Vue.js permite cargar un archivo CSV desde el dispositivo del usuario. El archivo debe tener columnas para Fecha, Post, Positividad, Negatividad y Neutralidad. Una vez cargado, el proyecto muestra los resultados de los sentimientos de los posts en una gráfica de tiempo.

Instalación del Proyecto
Clona este repositorio en tu máquina local utilizando el siguiente comando:

bash
Copy code
git clone https://github.com/zepolandres/visualizadorCSV.git
Navega hasta el directorio del proyecto:

bash
Copy code
cd visualizadorcsv
Instala las dependencias del proyecto utilizando npm:

Copy code
npm install
Ejecución del Proyecto
Una vez que hayas instalado las dependencias, puedes ejecutar el proyecto utilizando el siguiente comando:


Copy code
npm run serve
Esto iniciará un servidor local y podrás acceder al visualizador de datos CSV en tu navegador visitando la dirección http://localhost:8080.

Proceso de Carga y Procesamiento de Datos CSV
El proceso de carga y procesamiento de datos CSV se realiza de la siguiente manera:

Carga del Archivo CSV: El usuario puede cargar un archivo csv desde su dispositivo utilizando un formulario de carga de archivos.Este archivo debe contener las siguientes columnas: Fecha, Post, Positividad, Negatividad y Neutralidad. Una vez cargado el archivo, el proyecto procesará los datos y generará una gráfica de tiempo que muestra la evolución de los sentimientos de los posts a lo largo del tiempo.

Procesamiento de Datos: Una vez que se carga el archivo CSV, el proyecto utiliza la biblioteca PapaParse para analizar el contenido del archivo y convertirlo en un formato que pueda ser utilizado por el visualizador.

Lógica de Visualización: Los datos analizados se utilizan para generar un gráfico de líneas utilizando la biblioteca Chart.js. El gráfico muestra la evolución de los datos a lo largo del tiempo, con etiquetas y colores.