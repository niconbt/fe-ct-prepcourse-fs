function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var minusculas = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'string')
    minusculas = toLowercase(array[i]);
    
  }
  return minusculas;
}

module.exports = convertirStringAMayusculas;
