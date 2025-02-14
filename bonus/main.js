/* 
Scrivi una funzione rimuoviDuplicati(arr) che accetti un array e restituisca un nuovo array con tutti i duplicati rimossi.
Scrivi una funzione ruotaSinistra(arr, k) che accetti un array e un numero k e ruoti gli elementi dell'array a sinistra di k posizioni
Scrivi una funzione parolaPiuLunga(frase) che accetti una stringa contenente più parole e restituisca la parola più lunga. */


//Scrivi una funzione rimuoviDuplicati(arr) che accetti un array e restituisca un nuovo array con tutti i duplicati rimossi.
const elenco = ["mario", "luigi", "riccardo", "alfonso", "mario", "luigi", "riccardo", "alfonso"]
const duplicati = new Set([])
function rimuoviDuplicati(arr, arr2) {
    for (let i = 0; i < arr.length; i++) {
        arr2.add(arr[i])
    }
}
rimuoviDuplicati(elenco, duplicati)
console.log(Array.from(duplicati))


//Scrivi una funzione ruotaSinistra(arr, k) che accetti un array e un numero k e ruoti gli elementi dell'array a sinistra di k posizioni

