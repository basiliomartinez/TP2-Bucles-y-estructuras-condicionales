/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
Dificultad:  🟢🟡
*/

const texto = prompt("Ingrese un texto y contaremos las vocales");
if (texto === null || texto.trim() === "") {
  alert("Ingrese un texto valido");
} else {
  const cadena = texto.toLowerCase();

  let contadorVocales = 0;

  for (let position = 0; position < cadena.length; position++) {
    const letra = cadena.charAt(position);

    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contadorVocales++;
    }
  }
  document.writeln(`<p>El texto tiene ${contadorVocales} vocales</p>`);
}
