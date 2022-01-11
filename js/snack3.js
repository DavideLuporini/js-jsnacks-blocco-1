// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.
console.log('js ok')



let numbers = 0;
let numbersSum = 0;

for (i = 0; i < 10; i++) {
    numbers = parseInt(prompt('Inserisci un numero'));
    numbersSum += numbers;
}

console.log(numbersSum)