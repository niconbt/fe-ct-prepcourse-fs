function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = 0;
  var cantidad = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
       suma += resultadosTest[i];
       cantidad = suma / resultadosTest.length;
    
  }     
    return cantidad;
  }


module.exports = promedioResultadosTest;
