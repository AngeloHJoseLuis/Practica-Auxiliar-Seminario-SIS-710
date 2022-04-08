/*
16. Programa una función que dado un arreglo de elementos, elimine los duplicados:
entrada([‘5’, ’25’, ‘10’, ‘s’, ‘5’, ‘a’, ‘a’]) devolverá ([‘5’, ‘25’, ‘10’, ‘s’, ‘a’]).
*/

const quitarDuplicados = (arr = undefined) => {
    if (arr === undefined)
        return console.warn("No ingresaste un arreglo, no puede estar vacío.");
    if (!(arr instanceof Array))
        return console.error("El valor que ingresaste no es un arreglo");
    if (arr.length === 0)
        return console.error("El arreglo está vacío");
    if (arr.length === 1)
        return console.error("El arreglo debe tener al menos dos elementos");
    return console.info({
        original: arr,
        sinDuplicados: arr.filter((value, index, self) => self.indexOf(value) === index),
    })
}
// Llamo a la función vacía para ver mis verificaciones
quitarDuplicados();

// Llamo a la función con un objeto como parámetro para ver mis verificaciones
quitarDuplicados({});

// Llamo a la función con un Array vacío como parámetro para ver mis verificaciones
quitarDuplicados([]);

// Llamo a la función con un Array con un solo elemento como parámetro para ver mis verificaciones
quitarDuplicados([10]);

// Llamo a la función
quitarDuplicados([5, 25, 10, "s", 5, "a", "a"]);