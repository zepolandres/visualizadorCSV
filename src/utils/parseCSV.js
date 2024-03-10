import Papa from 'papaparse';

/**
 * Parsea un archivo CSV y devuelve los datos como un array de objetos.
 * @param {File} file - El archivo CSV para analizar.
 * @returns {Promise<Array<Object>>} - Una promesa que resuelve con los datos analizados.
 */
export async function parseCSV(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    // Configurar manejadores de eventos para cuando se carga el archivo o se encuentra un error
    reader.onload = () => {
      const data = Papa.parse(reader.result, { header: true }).data;
      resolve(data);
    };
    reader.onerror = () => {
      reject(new Error('Error al leer el archivo.'));
    };
    
    // Leer el archivo como texto
    reader.readAsText(file);
  });
}
