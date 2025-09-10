/*7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

Dificultad:  🟢🟡*/

//Le pregunto al usuario un número y lo convierto en entero.
const topeIngresado = parseInt(
  prompt("Ingrese un numero (max 50) para formar la piramide")
);

if (isNaN(topeIngresado) || topeIngresado < 1 || topeIngresado > 50) {
  alert("Numero invalido");
} else {
  for (let numero = topeIngresado; numero >= 1; numero--) {
    let fila = "";
    for (let repeticion = 1; repeticion <= numero; repeticion++) {
      fila = fila + numero;
    }
    document.writeln(fila + "<br>");
  }
}
