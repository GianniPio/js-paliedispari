// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.
// Dare l’output relativo.

// 1 Chidere all'utente un parola -> promt

// 2 Controllare che la parola sia palindroma
    // 2.1 Scomporre la parola in lettere -> split
    // 2.2 Invertire le lettere
    // 2.3 Ricomporre la parola
    // 2.4 Controllare che le parole siano uguali -> if

// 3 Dare l'output
    // 3.1 Se le parole sono uguali sono palindrome
    // 3.1 Altrimenti non sono palindrome


const word = prompt("Inserisci una parola!");

parolaPalindroma(word);

console.log(word);



// funzioni

function parolaPalindroma (parola) {

let letterWord = parola.split('');

letterWord = letterWord.reverse();

let wordReverse = letterWord.join('');

let risultato;

if (parola == wordReverse) {
    
    risultato = console.log("La parola è palindroma");
} else {
    risultato = console.log("La parola non è palindroma");
}

return risultato;

}