/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
Ejemplo:
Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido

Dificultad:  🟢🟡 */

/*======RESUELVO CON IF y ELSE
const nota = parseInt(prompt("Ingrese una nota (numero) de 0 a 10:"));

if (nota <= 2) {
  alert("Muy deficiente");
} else if (nota <= 4) {
  alert("Insuficiente");
} else if (nota <= 6) {
  alert("Suficiente");
} else if (nota === 7) {
  alert("Bien");
} else if (nota <= 9) {
  alert("Notable");
} else if (nota === 10) {
  alert("Sobresaliente");
} else if (isNaN(nota)) {
  alert("Introduce un numero valido");
} else {
  alert("Numero erroneo");
}=====*/

//Resuelvo con switch'
const nota = parseInt(prompt("Ingrese una nota (numero) de 0 a 10:"));
switch (true) {
  case nota <= 2:
    alert("Muy deficiente");
    break;
  case nota <= 4:
    alert("Insuficiente");
    break;
  case nota <= 6:
    alert("Suficiente");
    break;
  case nota === 7:
    alert("Bien");
    break;
  case nota <= 9:
    alert("Notable");
    break;
  case nota === 10:
    alert("Sobresaliente");
    break;
  case isNaN(nota):
    alert("Introduce un numero valido");
    break;
  default:
    alert("Numero erroneo");
}
