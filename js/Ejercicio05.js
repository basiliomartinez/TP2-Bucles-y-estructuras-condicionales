/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’

Dificultad:  🟢🟡
*/

const letras = "TRWAGMYFPDXBNJZSQVHLCKE"; // 23 letras, índice 0..22
let seguir = true;

do {
  // primero obtengo el TEXTO para poder detectar Cancelar (null)
  const entrada = prompt("Ingrese su DNI (0 a 99999999) – Cancelar para salir");

  // si el usuario cancela
  if (entrada === null) {
    seguir = false;
  } else {
    // luego convierto a número
    const entradaNum = parseInt(entrada);

    if (isNaN(entradaNum)) {
      alert("Debe ingresar un número válido");
    } else if (entradaNum < 0 || entradaNum > 99999999) {
      alert("El número debe estar entre 0 y 99.999.999");
    } else {
      const resto = entradaNum % 23; // calculo el índice
      const letra = letras.charAt(resto); // obtengo la letra correspondiente
      document.writeln(
        `<p>DNI ${entradaNum} → Letra: <strong>${letra}</strong></p>`
      );

      // preguntar si quiere calcular otro
      seguir = confirm("¿Desea calcular otra letra?");
    }
  }
} while (seguir);
