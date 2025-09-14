/**17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:



Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1
 */

const texto = prompt("Ingrese un texto y se le indicara su primer vocal");

if (texto === null || texto.trim() === "") {
  alert("Debes ingresar un texto valido");
} else {
  const cadena = texto.toLowerCase();
  let encontrada = false;
  for (let posicion = 0; posicion < cadena.length; posicion++) {
    const letra = cadena.charAt(posicion);

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      document.writeln(
        `<p>La primer  vocal ${letra} esta en la posicion ${posicion}  </p>`
      );
      encontrada = true;
      break;
    }
  }
}
