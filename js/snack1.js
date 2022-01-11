// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.


// dichiaro le costanti
const firstUserNumber = prompt('inserisci un numero');
const secondUserNumber = prompt('inserisci un altro numero');


console.log(firstUserNumber, secondUserNumber)

// verifica dei numeri
if (firstUserNumber > secondUserNumber) {
    console.log('the first number is higher then the second');
} else if (firstUserNumber < secondUserNumber) {
    console.log('Second number is higher then the first');
} else {
    console.log('pair');
}