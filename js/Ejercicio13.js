/*13- Realiza un script que pida un texto y lo muestre en mayúsculas.
Dificultad:  🟢🟡*/
const texto = prompt("Ingrese un texto para transformar a mayusculas");
if (texto.trim() === "") {
  alert("Debes ingresar algun texto");
} else {
    const textoMayuscula = texto.toLocaleUpperCase ()
    document.writeln (`<p>${textoMayuscula}</p>`)
}
