function devolverString(string) {
  // La función recibe un argumento "string".
  // Debe retornar dicho string.
  // Tu código:
  return string;
}

function nombre(){
  var texto = "Nicolas";
  var resultado = devolverString(texto);
  console.log(resultado);
}
nombre();

module.exports = devolverString;