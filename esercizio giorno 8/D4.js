/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1 , l2) {
    let risultato = (l1 * l2 );
  return risultato;
  }
  
  let risultato = area (3, 10);
  console.log(risultato)
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(x, y) {
    if (x === y) {
        let ris = ((x + y) * 3);
        return ris;}
    else{
        ris =( x + y);
        return ris;}
}

let ris= crazySum(6, 6);

console.log(ris)
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/



/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(x)  {
  if (x>19) {
    return (Math.abs(x - 19)) * 3;
  } else {
    return Math.abs(x - 19);
  }
  


}
let diffass= crazyDiff(25)
console.log(diffass)


/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function boundary(n) {
  if (20 < n < 100|| n === 400) {
    return "true"
  } else {
    return "false"
  } 
 }
 boundary();
 console.log(boundary(50))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify (Stringa){ if (Stringa === "Epicode"){
  return Stringa;
}
else{ return "Epicode" + Stringa }
}
let Epicode = epify(" corso di formazione")
console.log(Epicode)

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numb) {
  if (numb > 0 && numb % 3 === 0|| numb % 7=== 0) {
    return "TRUE"
  } else {
   return "ERRORE!"
  }
}
let risu = check3and7(61);
console.log(risu)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(str) {
    return (str.split("").reverse().join(""))
}
let revtext= reverseString("MONICA");
console.log(revtext)



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(frase) {
  let parole = []
  parole = frase.split(" ");
  let frasimaiu= "" ;

for (let i = 0; i < parole.length; i++) {
 frasimaiu += parole[i].charAt(0).toUpperCase() + parole[i].slice(1) + "";
 if (i < parole.length - 1 ) {
  frasimaiu += " ";
}
return frasimaiu
}
}
console.log(upperFirst("ciao sono"));




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString (stringa9) {
  return stringa9.slice(1, -1)
  
}
let ris9 = cutString("miao");
console.log(ris9)
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n10){
  let numericaso=[];
  for (var i = 0; i < n10; i++){
  let numeri= Math.floor(Math.random()*11);
  numericaso.push(numeri);
}
return numericaso;
}

let random= giveMeRandom(10);
console.log(random);