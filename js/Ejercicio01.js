/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
Dificultad:  🟢🟡*/

/*======Resuelvo con if y else
const edad = parseInt(prompt("Ingrese su edad:"));
if (isNaN(edad)) {
  alert("Introduce un numero valido");
} else if (edad >= 18) {
  alert("Ya puedes conducir");
} else {
  alert("No puedes conducir");
}=======*/

//Resuelvo con switch
const edad = parseInt(prompt("Ingrese su edad:"));

switch (true) {
  case edad >= 18:
    alert("Ya podes votar");
    break;
  case edad <= 18:
    alert("No podes votar");
    break;
  default:
    alert("Introduce un numero valido");
}
