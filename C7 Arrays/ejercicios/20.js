function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

  var iguales = array.every(function(element){
      return element  == array[0];
        
       
  });
  return iguales;
    
}

module.exports = todosIguales;
