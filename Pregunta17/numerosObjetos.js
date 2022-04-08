/*
17. Programa una función que dado un array de números devuelva un objeto con dos arreglos el primero con los 
    números pares y en el segundo con los números impares.
*/

const separarParesImpares = (arr = undefined) => {
    if (arr === undefined)
        return console.warn("No ingresaste un arreglo de números.");
    if (!(arr instanceof Array))
        return console.error("El valor que ingresaste no es un arreglo");
    if (arr.length === 0)
        return console.error("El arreglo está vacío");
    for (let num of arr) {
        if (typeof num !== "number")
            return console.error(`El valor ${num} ingresado no es un número`);
    }
    return console.info({
        pares: arr.filter(num => num % 2 === 0),
        impares: arr.filter(num => num % 2 === 1)
    })
}
