function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var minusculas = [];
  for (let i = 0; i < array.length; i++) {
    minusculas.push(array[i].toUpperCase());
    
  }
   return minusculas;
}

//return (minusculas);
 //var mayusculas = array.map(arr => arr.toUpperCase());
 //return mayusculas;
module.exports = convertirStringAMayusculas;
