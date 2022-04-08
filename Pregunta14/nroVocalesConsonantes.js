// 14. Programa una función que dada una cadena de texto cuente el numero de vocales y consonantes.

const contarLetras = (cadena = "") => { 
    if (!cadena)
        return console.warn("No ingresaste una cadena de texto");
    if (typeof cadena !== "string")
        return console.error(`El valor ${cadena} ingresado no es una cadenade texto`);
    let vocales = 0,
        consonantes = 0;
    cadena = cadena.toLocaleLowerCase();
    for (let letra of cadena) {
        if (/[aeiouáéíóú]/.test(letra)) vocales++;
        if (/[bcdfghjklmnñpqrstvwzyx]/.test(letra)) consonantes++;
    }
    return console.info({
        cadena,
        vocales,
        consonantes
    })
}
// Llamo a la función contarLetras sin parámetro para ver la validación
contarLetras();

// Llamo a la función contarLetras con un número como parámetro para ver la validación de que sea de tipo String
contarLetras(3);

// Llamo a la función contarLetras con un string como parámetro para ver la validación de que sea de tipo String y me devuelve un objeto y me dice cuantas vocales y cuantas consonantes tengo
contarLetras("Hola Angelo Huanca Jose Luis Practica 1 de Aux sis719");