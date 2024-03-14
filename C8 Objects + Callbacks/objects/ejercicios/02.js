function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;
   objeto[propiedad].nuevo = "si";
   return objeto;
}

module.exports = actualizarValorPropiedad;
