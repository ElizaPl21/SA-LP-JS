/**Crear un programa en Javascript que realice lo siguiente:
3
0, 1, 1.
10
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente:
Entrada: 
Salida: 
Entrada: 
Salida: 
Pruébalo con los números que se te ocurran. */

function calcularSerieFibonnacci() {
    let num;
    do {
        num = prompt("Introduce número para calcular la serie de Fibonacci");
        num = parseFloat(num);
        if (isNaN(num)) {
            alert("Introduce un número válido");
        }
    } while (isNaN(num));

    const resultado = serieFibonacci(num);
    console.log("El cálculo de la serie de Fibonacci es: ", resultado);
}

function serieFibonacci(num) {
    const serie = [];
    if (num <= 0) {
        return serie;
    }
    if (num >= 1) {
        serie.push(0);
    }
    if (num >= 2) {
        serie.push(1);
    }
    for (let i = 2; i < num; i++) {
        serie.push(serie[i - 1] + serie[i - 2]);
    }
    return serie;
}

calcularSerieFibonnacci();
