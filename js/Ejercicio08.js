/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456*/

const numeroPiramide = parseInt(prompt("Ingrese un numero (max 50)"));

if (isNaN(numeroPiramide) || numeroPiramide < 1 || numeroPiramide > 50) {
  alert("Numero invalido, debe estar entre 1-50");
} else {
  for (let filaNumero = 1; filaNumero <= numeroPiramide; filaNumero++) {
    let fila = "";
    for (let numero = 1; filaNumero >= numero; numero++) {
      fila = fila + numero;
    }
    document.writeln(fila + "<br>");
  }
}
