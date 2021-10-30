// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// 1. Input
    // 1.1 L'utente sceglie tra pari e dispari
    // 1.2 L'utente sceglie un numero tra 1 e 5
    // 1.2 Far generare numero random al pc  -> funzione

// 2. Somma dei due numeri

// 3. Stabilire se la somma è pari o dispari -> fuction if

// 4. Vedere vincitore -> if


const scelta = prompt("Scegli tra pari e dispari");

let number = parseInt(prompt("Scegli un numero tra 1 e 5"));

const numberRandom = randomOneFive();

const sum = number + numberRandom;

let result = pariDispari(sum);


if (result == scelta) {
    
    console.log("Il vincitore è l'utente");

} else {
    
    console.log("Il vincitore è il pc");
}

console.log(number);
console.log(numberRandom);



// funzioni

function randomOneFive() {

    const x = Math.floor(Math.random() * 5) + 1;

    return x;

}


function pariDispari(y) {

    let paridispari;

    if (y % 2 == 0) {
        
        paridispari = "pari";

    } else {
        
        paridispari = "dispari";

    }

    return paridispari;

}