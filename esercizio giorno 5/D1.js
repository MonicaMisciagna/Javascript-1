/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*i data type sono dei valori che si possono attribuire ad una variabile. Come se creassimo delle scatole etichettate con il contenuto che dovranno appunto contenere.
i principali data type sono:
- Number: numeri, si utilizza il punto invece che la virgola per i decimali, il dato numerico non va inserito all'interno di apici.
-String: testo, si utilizzano gli apici e i doppi apici all'esterno della stringa da scrivere.
-Boolean, dato booleano, assume come valore solo  True o False
-null, diverso dal valore zero, lo si trova quando non si ha un valore in una variabile dichiarata
-Undefined, valore di una variabile non definito.*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
//let name = "monica"

//console.log(name)


/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12
let numero2 = 20
let somma= numero1 + numero2 

console.log(somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

 //let name = "misciagna"  //con let non si può riassegnare un valore ad una variabile precedentemente dichiarata
 //console.log(name)
 //var name = "monica"
// var name = "misciagna"    //con var si può riassegnare il valore
//console.log(name)
 
//const name = "monica"
//const name = "misciagna"
//console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let y = 4
let differenza= y - x

console.log(differenza)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 !== name2)
console.log(name1 === name2)

name2= name2 .toLowerCase()
console.log(name1===name2)

