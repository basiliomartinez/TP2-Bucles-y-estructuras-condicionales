/*12- Realiza un script que genere un número aleatorio entre 1 y 99

Ejercicios con String
Dificultad:  🟢🟡*/
// Ejercicio 12 - Generar un número aleatorio entre 1 y 99

const numeroAleatorio = Math.floor(Math.random() * 99) + 1;

alert(`Número aleatorio generado: ${numeroAleatorio}`);

/*
👉Math.random()
Es una función de JavaScript que devuelve un número decimal entre 0 (incluido) y 1 (excluido).

Ejemplos posibles: 0.25, 0.734, 0.999.


👉Math.floor(...)

“Floor” significa piso → redondea hacia abajo al número entero más cercano.

Ejemplo:
Math.floor(24.75) → 24.

Math.floor(89.1) → 89.

Entonces ahora tenemos enteros entre 0 y 98.

👉 Math.floor(Math.random() * 99) + 1
Como hasta ahora iba de 0 a 98, al sumarle 1 el rango se corre a 1 a 99.

Ejemplos:

Si salió 0 → 0 + 1 = 1.

Si salió 98 → 98 + 1 = 99.

¡Listo! Ahora tenemos un número entero del 1 al 99.

*/