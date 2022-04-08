/**
 * Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
const carta = 'bici coche balón _playstation bici coche peluche'
Al ejecutar el método debería devolver lo siguiente:
const regalos = listGifts(carta)

console.log(regalos)
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/
/* Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!
 */

const carta = 'bici coche balón _playstation bici  coche   peluche';

function listGifts(letter) {
    const arrCarta = letter.split(" ");
    return arrCarta.filter((regalo) => {
            let value = regalo.startsWith("_")
            if (value !== true && regalo !== "") return regalo !== value
        })
        .reduce((contador, regalo) => {
            contador[regalo] = (contador[regalo] || 0) + 1;
            return contador
        }, {});
}

const regalos = listGifts(carta)
console.log(regalos)
