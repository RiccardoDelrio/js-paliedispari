/* 
Scrivi una funzione rimuoviDuplicati(arr) che accetti un array e restituisca un nuovo array con tutti i duplicati rimossi.
Scrivi una funzione ruotaSinistra(arr, k) che accetti un array e un numero k e ruoti gli elementi dell'array a sinistra di k posizioni
Scrivi una funzione parolaPiuLunga(frase) che accetti una stringa contenente più parole e restituisca la parola più lunga. */


//Scrivi una funzione rimuoviDuplicati(arr) che accetti un array e restituisca un nuovo array con tutti i duplicati rimossi.
const elenco = ["mario", "luigi", "riccardo", "alfonso", "giuseppe", "mario", "ciro", "luigi", "riccardo", "alfonso"]


const duplicati = new Set([])
function rimuoviDuplicati(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        arr2.add(arr[i])
    }
}
rimuoviDuplicati(elenco, duplicati)
console.log(Array.from(duplicati))


//Scrivi una funzione ruotaSinistra(arr, k) che accetti un array e un numero k e ruoti gli elementi dell'array a sinistra di k posizioni

//slice e concat ?
const numeri = [5, 4, 3, 2, 6, 9, 62];
console.log(numeri.length)
const k = 3

function ruotaSinistra(arr, k) {
    if (k < (arr.length)) {
        const nuovoArray = [arr.slice(k, arr.length).concat(arr.slice(0, k))]
        return nuovoArray
    } else {
        console.log("numero troppo grande");

    }
}
console.log(ruotaSinistra(numeri, k));