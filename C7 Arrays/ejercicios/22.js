function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var resultados = [ 0 , 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];

     resultados.map(function(num){
        return  num;
    });
    return resultados;
}
// funciona tanto resultado.map() , como resultado.forEach()

module.exports = tablaDelSeis;
