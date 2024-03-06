function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  var mayor = array[0];
  var indice = 0;  
  for (let i = 1; i < array.length; i++) {
       if (array[i] > mayor){
             mayor = array[i];
             indice = i;
       }
  } 
        
    
    return indice;
         
         
}

module.exports = encontrarIndiceMayor;
