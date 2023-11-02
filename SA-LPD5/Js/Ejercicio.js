/**Crear un programa en Javascript que realice lo siguiente:
Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y volver a solicitarle que ingrese un número.
Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato. */

function adivinaNumeroSecreto() {
    const numeroSecreto = 24;
    const numeros = [];
    let numero;
    let numerosIntroducidos = 0;
  
    while (true) {
      numero = prompt("Adivina el número secreto del 1 al 100");
      numerosIntroducidos++;
  
      if (isNaN(numero)) {
        alert("Ingresa un número válido.");
        continue;
      }
  
      numero = Number(numero);
  
      numeros.push(numero);
  
      if (numero < numeroSecreto) {
        alert("Ups, el número secreto es mayor, vuelve a intentarlo.");
      } else if (numero > numeroSecreto) {
        alert("Ups, el número secreto es menor, vuelve a intentarlo.");
      } else {
        alert("Felicidades, adivinaste el número secreto. Los números que seleccionaste anteriormente son: " + numerosIntroducidos);
        alert("Lista de números introducidos: " + numeros.join(", "));
        break;
      }
    }
  }
  
  adivinaNumeroSecreto();
  