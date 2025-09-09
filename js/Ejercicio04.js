/*4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

Dificultad:  🟢🟡🔴*/

let suma = 0;
//Inicio la suma en cero, aca voy a ir sumando todos los numeros validos
let continuar = true;
//variable bandera: mientras sea verdadero sigue el bucle

do {
  const entrada = prompt("Ingrese un numero (cancelar para terminar)");

  if (entrada === null) {
    continuar = false;
  } //si el usuario cancela, prompt devuelve null y en ese caso cambia la bandera a false y el bucle se corta
  else {
    const numeros = parseInt(entrada); // convierto lo ingresado a un numero entero
    if (isNaN(numeros)) {
      alert("No es un numero, intente de nuevo");
      //si lo ingresado no es un numero, manda un alert y no suma nada
    } else {
      suma = suma + numeros;
    }
  }
} while (continuar);
document.writeln(`<p>Suma total ${suma}</p>`);
// cuando el usuario cancela, salgo del bucle y se muestra el resultado final
