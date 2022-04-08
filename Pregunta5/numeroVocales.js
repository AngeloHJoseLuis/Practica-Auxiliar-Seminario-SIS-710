// 5. Realiza un script que cuente el número de vocales que tiene un texto.

var cadena = prompt("Introduce una cadena de texto:");
var numchar = cadena.length;    //Devuelve la longitud del string.
cadena = cadena.toUpperCase();  //Devuelve el string en mayúsculas.
var car;
var contador = 0;
var i;
for (i = 0; i < numchar; i++) {
    car = cadena.charAt(i);    //recupera el caracter i del string.
    if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
        contador++;
    }
}
document.write("Número de Vocales: " + contador + ".");