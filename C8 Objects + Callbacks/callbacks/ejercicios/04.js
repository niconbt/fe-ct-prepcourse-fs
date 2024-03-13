function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   var resultado = 0;
   for (let i = 0; i < arrayOfNumbers.length; i++) {
      resultado += arrayOfNumbers[i];
      
   } 
   cb(resultado);
   
}

module.exports = sumarArray;
