function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
  for (let i = 0; i >=18; i++) {
    if ( i >= 18){
      return "Allowed";
    } else if ( i < 18){
      return "Not Allowed";
    }
  }
}
module.exports = mayoriaDeEdad;
