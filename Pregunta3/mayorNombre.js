// 3. Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.

    //PEDIMOS TODOS LOS DATOS
    var nombre1 = prompt("Nombre 1:");
    var edad1 = Number(prompt("Edad 1:"));

    var nombre2 = prompt("Nombre 2:");
    var edad2 = Number(prompt("Edad 2:"));

    var nombre3 = prompt("Nombre 3:");
    var edad3 = Number(prompt("Edad 3:"));

    //Función max() devuelve el mayor de los argumentos pasados.
    var maximo = Math.max(edad1, edad2, edad3);

    if (maximo == edad1) {
        document.write("El mayor es: " + nombre1);
    }
    if (maximo == edad2) {
        document.write("El mayor es: " + nombre2);
    }
    if (maximo == edad3) {
        document.write("El mayor es: " + nombre3);
    }