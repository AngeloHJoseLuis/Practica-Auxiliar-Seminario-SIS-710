/* 
7. Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” 
deberá mostrar “lat euq aloh”.
*/

var cadena = prompt("Introduce un Texto:");
var numchar = cadena.length;
var j;
var car;
var salida = "";
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);    //recupera el caracter i del string.
    salida = car + salida;
}
document.write(salida);