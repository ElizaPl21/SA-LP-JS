/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
45.
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 
 14.
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2. 
Entrada: 
Salida
Entrada:
Salida
Pruébalo con los valores numéricos que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.*/

function convertirTemp (){
let temperaturaC;
do{
    temperaturaC=prompt("Ingrese la temperatura en °C");
    temperaturaC=parseFloat(temperaturaC);
 
if (isNaN(temperaturaC)){
    alert("Ingrese un valor númerico");
 } 
} while (isNaN(temperaturaC));

    const converciónF = (temperaturaC*1.8) + 32
    const converciónK = temperaturaC + 273.15
   
    console.log("La conversion de " + temperaturaC + "°C a °F es de: " + converciónF);
    console.log("La conversion de " + temperaturaC + "°C a °K es de: " + converciónK);
}
convertirTemp();
