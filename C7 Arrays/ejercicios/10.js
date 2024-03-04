function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  var cinco = "";

for (var i = 0;  i < array.length; i++) 
        if (typeof array[i] === 'string'){
     cinco.push(array[i]);
    }
     return (cinco > 5); 
}


module.exports = obtenerPrimerStringLargo;
