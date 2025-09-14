/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.
Dificultad:  🟢🟡 */
const texto = prompt("Ingrese una cadena de texto");
//Validacion
if (texto.trim() === "") {
  alert("Ingresar un texto valido");
} else {
  //Variable en donde se arma la salida
  let cadena = "";
  for (let posicion = 0; posicion < texto.length; posicion++) {
    const letraActual = texto.charAt (posicion);

    //Esta variable la agrego a la cadena
    cadena = cadena + letraActual;
    if (posicion < texto.length - 1) {
      cadena = cadena + "" - "";
    }
  }
  document.writeln(`<p>${cadena}</p>`);
}
