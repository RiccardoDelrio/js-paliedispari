/* Pari e Dispari */
/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

const userChoice = prompt("pari o dispari?")
const userNumbeer = Number(prompt("Scegli un numero da 1 a 5?"))

function numberGenerator() {
    const number = Math.floor(Math.random() * 5) + 1
    return number
}
const randomNumber = numberGenerator()
console.log(userChoice);
console.log(userNumbeer);
console.log(randomNumber)

function aritmeticSum(numb1, numb2) {
    const sum = numb1 + numb2
    return sum
}
somma = aritmeticSum(userNumbeer, randomNumber)
console.log(somma);
let result

function itsOdd(num) {
    if (num % 2 === 0)
        result = "pari"
    else {
        result = "dispari"
    }
    return result
}
itsOdd(somma)
console.log(result);

function areYouWinner(str) {
    if (str === result) {
        alert("hai vinto!")
    } else {
        alert("hai perso")
    }
}
areYouWinner(userChoice)


//ESERCIZIO SENZA L'USO DELLE FUNZIONI
/* let result
const sum = userNumbeer + randomNumber

if (sum % 2 === 0)
    result = "pari"
else {
    result = "dispari"
}
console.log(result);

if (userChoice === result) {
    alert("hai vinto!")
} else {
    alert("hai perso")
} */