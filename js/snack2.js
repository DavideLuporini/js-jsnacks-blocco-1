// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

// dichiaro le costanti
const firstUserword = prompt('inserisci una parola');
const secondUserword = prompt('inserisci un altra parola');
// dichiaro la costante per stampare in pagina
const displayElement = document.getElementById('display')

console.log(firstUserword, secondUserword)

// verifica dei numeri
let message = 'la parola più lunga è: '
if (firstUserword > secondUserword) {
    message += firstUserword;
} else if (firstUserword < secondUserword) {
    message += secondUserword;
} else {
    message = 'le parole hanno la stessa lunghezza'
}

displayElement.innerText = message;
console.log(message)