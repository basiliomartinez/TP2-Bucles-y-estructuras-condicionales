/*
6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
1
22
333
4444
55555
666666

Dificultad:  🟢🟡
*/

//Bucle externo que hace las filas
for (let numero = 1; numero <= 30; numero++) {
  let fila = "";
//Bucle interno
  for (let repeticion = 1; repeticion <= numero; repeticion++){
    fila = fila + numero;}

document.writeln(fila + '<br>');
  }