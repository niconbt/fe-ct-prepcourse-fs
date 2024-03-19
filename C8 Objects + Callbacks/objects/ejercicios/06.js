const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var contador = 0;
  for (var key in objeto) {
    if (Object.hasOwnProperty.call(objeto, key)) {
      contador++;
      
    }
  }
  return contador;
};

module.exports = contarPropiedades;
