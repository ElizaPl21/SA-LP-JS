/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran*/

const numeros = document.getElementsByClassName("numeros")[0];
const iguales = document.getElementsByClassName("iguales")[0];
const acomodoMayor = document.getElementsByClassName("mayor")[0];
const acomodoMenor = document.getElementsByClassName("menor")[0];

let num1 = parseFloat(prompt("Ingrese el primer número")); // Los prompts entregan cadena de texto, por lo que se tienen que convertir
let num2 = parseFloat(prompt("Ingrese el segundo número"));
let num3 = parseFloat(prompt("Ingrese el tercer número"));
let menor;
let medio;
let mayor;
numeros.textContent = `Los números ingresados son: ${num1}, ${num2}, ${num3}`;

// Encontrar el mayor, el del centro y el menor
if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
        medio = num2;
        menor = num3;
    } else {
        medio = num3;
        menor = num2;
    }
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
        medio = num1;
        menor = num3;
    } else {
        medio = num3;
        menor = num1;
    } 
} else {
    mayor = num3;
    if (num1 >= num2) {
        medio = num1;
        menor = num2;
    } else {
        medio = num2;
        menor = num1;
    }
}

acomodoMayor.textContent = `De mayor a menor: ${mayor}, ${medio}, ${menor}`;
acomodoMenor.textContent = `De menor a mayor: ${menor}, ${medio}, ${mayor}`;

// Comprobar si los números son iguales
if (num1 === num2 && num2 === num3) {
    iguales.textContent = `Los números ingresados son iguales: ${num1}`;
}
