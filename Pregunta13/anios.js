// 13. Programa una función que dada una fecha valida determine cuantos años han pasado hasta el día de hoy.

const calcularAnios = (fecha = undefined) => {
    if (fecha === undefined)
        return console.warn("No ingresaste fecha");
    if (!(fecha instanceof Date))
        return console.error("El valor que ingresaste no es una fecha válida");
    let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
        aniosEnMS = 1000 * 60 * 60 * 24 * 365,
        aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);
    return (Math.sign(aniosHumanos) === -1) ?
        console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`) :
        (Math.sign(aniosHumanos === 1) ?
            console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`) :
            console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
        )
}
// Llamo a la función calcularAnios sin parámetro para corroborar las validaciones:
calcularAnios();

// Llamo a la función calcularAnios con {} como parámetro para corroborar las validaciones:
calcularAnios({});

// Llamo a la función calcularAnios con un valor boolean como parámetro para corroborar las validaciones:
calcularAnios(false);

// Llamo a la función calcularAnios con la fecha de hoy como parámetro para corroborar las validaciones:
calcularAnios(new Date);

// Llamo a la función calcularAnios con una fecha pasada como parámetro para corroborar las validaciones:
calcularAnios(new Date(1984, 4, 23));

// Llamo a la función calcularAnios con una fecha que todavia no pasó como parámetro para corroborar las validaciones:
calcularAnios(new Date(2050, 4, 23));