// Arreglos (Ejercicios ONLINE) Viernes 13 de mayo de 2022
// Ejercicio 6 - Suma Elementos Arreglo

/* 
• Construya un algoritmo que sume todos los elementos 
de un arreglo de tamaño N
• La dimensión del arreglo es ingresada por el usuario
• Los elementos (números) del arreglo son ingresados por el usuario
*/

let dimensionArreglo: number = Number(prompt("Ingrese longitud del arreglo "));

let arregloDeNumeros: number[] = new Array(dimensionArreglo);
let indice: number;
let sumaTotal: number = 0;

for (indice = 0; indice < dimensionArreglo; indice++) {
  arregloDeNumeros[indice] = Number(
    prompt("Ingrese número para la posición " + indice)
  );
  sumaTotal += arregloDeNumeros[indice];
}

console.log("La suma de todos los elementos del arreglo es " + sumaTotal);
