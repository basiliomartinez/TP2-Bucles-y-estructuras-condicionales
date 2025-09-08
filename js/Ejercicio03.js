/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp

Dificultad:  🟢🟡*/

//====LO QUE ENTIENDO DEL ENUNCIADO ES SOLICITAR DATOS EN UN BUCLE, GUARDARLOS Y SALIR CUANDO EL USUARIO DICE BASTA


//Creo una variable llamada cadenasTexto que sera un string y la arranco vacía para después llenarla con lo que escriba el usuario

let cadenasTexto = "";
// controla si el bucle sigue o no
let seguir = true;

/*Hacemos un bucle con do y while,
📌 Idea en palabras simples
do = “hacelo una vez sí o sí”.
while = “seguí haciéndolo mientras la condición sea verdadera”.
En este caso:
do → pedir cadena y guardarla.
while → repetir si el usuario dijo que quería seguir (seguir = true).
*/

do {
  const texto = prompt(
    "Ingrese una cadena de texto (pulse cancelar para terminar)"
  );

  if (texto === null) {
    // el usuario apretó "Cancelar" en el prompt
    seguir = false;
  } else {
    if (cadenasTexto === "") {
      cadenasTexto = texto;
    } else {
      cadenasTexto = cadenasTexto + "-" + texto;
    }
    seguir = confirm("Desea ingresar otra cadena?");
  }
} while (seguir);
document.writeln("<p>" + cadenasTexto + "</p>");

