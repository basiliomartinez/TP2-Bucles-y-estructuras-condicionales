/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
Dificultad:  🟢*/

const texto = prompt("Ingrese cadena de texto para invertir");

if (texto === null || texto.trim() === "") {
  alert("Ingresar un texto valido");
}
else {
    let invertido = "";

    for (let posicion = texto.length -1; posicion>=0; posicion--){
        invertido = invertido + texto.charAt (posicion)
    }
    document.writeln (`<p>${invertido}</p>`)
}