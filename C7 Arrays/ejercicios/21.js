function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  var perdidos = ["Enero" , "Marzo" , "Noviembre"];
  var desordenados = array.filter(function(mes){
         return perdidos.includes(mes);
         
 });
      if (desordenados.length === 3){
        return desordenados;
      } else 
      return "No se encontraron los meses pedidos";
}

module.exports = mesesDelAño;
