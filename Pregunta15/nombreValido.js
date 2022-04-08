// 15. Programa una función que valide que un texto sea un nombre valido. Entrada(‘edson’) devolverá ‘verdadero’.

const validarnombre = (nombre = "") => {
    if (!nombre)
        return console.warn("No ingresaste un nombre");
    if (typeof nombre !== "string")
        return console.error(`El valor ${nombre} ingresado no es una cadena de texto`);
    let expReg = /^[A-Za-zÑnÁáÉéÍíÓóÚúÃãÕõÂâÊêÎîÔôÛûÜü$\s]+$/g.test(nombre)
    return (expReg) ?
        console.info(`${nombre}, es un nombre válido`) :
        console.warn(`${nombre} no es válido`);
}
// Llamo a mi función sin parámetro para corroborar la validación:
validarnombre();

// Llamo a mi función con Number parámetro para corroborar la validación:
validarnombre(5);

// Llamo a mi función con una String pero que contiene un caracter no válido como una , como parámetro para corroborar la validación:
validarnombre("Edson, Olmedo");

// Llamo a mi función con una String parámetro para corroborar la validació:n
validarnombre("Edson Olmedo");