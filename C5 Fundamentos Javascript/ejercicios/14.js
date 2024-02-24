function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
var long = String(str1);
var long2 = String(str2);
if(long.length == long2.length){
  return true;
}else {
  return false;
}
}

module.exports = tienenMismaLongitud;