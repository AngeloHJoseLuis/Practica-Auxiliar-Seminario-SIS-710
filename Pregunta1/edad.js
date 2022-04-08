
// 1. Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir.

//PIDE POR TECLADO LA EDAD

var edad = prompt("Introduce tu edad");
//COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO
if (Number(edad) == edad) {
	//SI ES MAYOR DE 18
	if (edad > 18) {
		//IMPRIME EN PANTALLA EL MENSAJE
		document.write("Puedes conducir");
	}
}
//SINÓ
else {
	//MUESTRA UN MENSAJE
	alert("Introduce un numero válido");
}