/**Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
5
120.
6
720.
Entrada: 
Salida:
Entrada: 
Salida: 
Pruébalo con los números que se te ocurran. */

function factorial(num) {
    if (num === 1 || num === 0) {
      return 1;
    } else if (num < 0) {
      return "El factorial solo es para números enteros";
    } else if (num > 1) {
      return num * factorial(num - 1);
    }
  }
  
  function numfactorial() {
    let numero = prompt("Introduce un número para calcular su factorial");
  
    if (isNaN(numero)) {
      alert("Introduce un número válido");
      numfactorial();
    } else {
      const num = parseFloat(entrada);
      if (num % 1 !== 0) {
        alert("El número debe ser un entero para calcular el factorial");
        numfactorial();
      } else {
        const num1 = factorial(num);
        console.log("El factorial de " + num + " es " + num1);
      }
    }
  }
  
  numfactorial();
  

