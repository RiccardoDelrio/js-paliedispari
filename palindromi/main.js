/* Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/

function returnReverse(str) {
    return str.split("").reverse().join("");
}
const userWord = prompt("inserisci una parola per verificare se è un palindromo")
returnReverse(userWord)
const reverse = (returnReverse(userWord))
console.log(userWord);
console.log(reverse);



function isPalindroma(parola, word_reverse) {
    if (parola === (word_reverse)) {
        return true
    } else {
        return false
    }
}
isPalindroma(userWord, reverse)
console.log(isPalindroma(userWord, reverse))

if (isPalindroma(userWord, reverse)) {
    console.log("è palindroma");
    alert("complimenti hai trovato un palindromo")
} else {
    alert("non hai trovato un palindromo")
}



