function esFechaValida(fecha) {
  if (fecha instanceof Date && !isNaN(fecha.getTime())){
    return true;
  } else {
    return false;
  }

}
  
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:


module.exports = esFechaValida;