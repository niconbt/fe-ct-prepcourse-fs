function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let primerMultiplo = undefined;
  secuencia.forEach(num => {
    if (!primerMultiplo && num % n === 0) {
      primerMultiplo = num;
    }
  });
  return primerMultiplo;
}

module.exports = encontrarPrimerMultiploDeN; 