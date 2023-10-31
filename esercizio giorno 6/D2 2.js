/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIV0I QUI LA TUA RISPOSTA */
/*let num = parseInt(prompt("inserisci un numero"));
let num1 = parseInt(prompt("inserisci un numero"));
let arr= [
  num, 
  num1
];
arr.sort();
let res = arr.pop();
console.log(res);


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let num2 = parseInt(prompt("inserisci un numero"));
let arr2= [num2];
if(num2 != 5)
{console.log("not equal")}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* let num3 = parseInt(prompt("inserisci un numero"));
let arr3= [num3];
if (num3 % 5 === 0){
  console.log("divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let num4 = parseInt(prompt("inserisci un numero"));
let num5 = parseInt(prompt("inserisci un numero"));
let arr4= [num4,
           num5];
 if(num4 === 8) 
 {console.log("DATO INSERITO CORRETTO")} 
 else if (num5 === 8) 
 {console.log("DATO INSERITO CORRETTO")}
 else if ( (num4+ num5)===8) 
 {console.log("DATO INSERITO CORRETTO")}  
 else  ( (num4-num5)===8) 
 {console.log("DATO INSERITO CORRETTO")}  

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let totalShoppingCart = parseInt(prompt("inserisci un numero"));
let arr5= [totalShoppingCart];

 if(arr5 >= 50) 
 {console.log("Hai diritto alla spedizione gratuita. TOT."+ arr5)} 
 else  (arr5 < 50) 
 
 { let arr5=[totalShoppingCart+10]
  console.log("Se raggiungi 50€ di spesa alla spedizione ci pensiamo noi.TOT"+(arr5))}
 
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let totalShoppingCart = parseInt(prompt("inserisci un numero"));

let arr5= [totalShoppingCart];
let arr6= (arr5-(20 % arr5))

 if(arr6 >= 50) 
 {console.log("Hai diritto alla spedizione gratuita. TOT."+ arr6)} 
 else  (arr6 < 50) 
  { let arr6=[totalShoppingCart+10]
  console.log("Se raggiungi 50€ di spesa alla spedizione ci pensiamo noi.TOT."+(arr6))}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let var1 = 22;
let var2 = 28;
let var3 = 6;

if (var1 > var2 && var1 > var3) {
  if (var2 > var3) {
    console.log ("L'ordine  sarà: "+ var1 + "," + var2 + "," + var3);
  }
  else{
    console.log ("L'ordine  sarà: "+ var1 + "," + var3 + "," + var2);
  }
}
else if (var2 > var1 && var2 > var3) {
  if (var1 > var3) {
    console.log ("L'ordine sarà: "+ var2 + "," + var1 + "," + var3);
  }
  else{
    console.log ("L'ordine  sarà: "+ var2 + "," + var3 + "," + var1);
  }
}
else {
  if (var1 > var2) {
    console.log ("L'ordine  sarà: "+ var3 + "," + var1 + "," + var2);
  }
  else{
    console.log ("L'ordine  sarà: "+ var3 + "," + var2 + "," + var1);
  }
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*let dato1 = parseInt(prompt("inserisci un dato"));
console.log("il dato è un:"+ typeof dato1 );

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let numb = 11
ris = (numb % 2)
if (ris < 0)
{console.log("pari")}
else (ris > 0)
{console.log("dispari")}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  


/* SCRIVI QUI LA TUA RISPOSTA */
/*let val = 11
if (val < 5) {
  console.log("Meno di 5");
} 
   else if (val < 10) {
    console.log("Meno di 10");
  }
   else  
    { console.log("Uguale a 10 o maggiore");
    }
/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css']
}


/* SCRIVI QUI LA TUA RISPOSTA */
me.città="toronto"
//console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
//console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop()
console.log(me)
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */
let arr10 =[]

 arr10.push(1,2,3,4,5,6,7,8,9,10)

 //console.log(arr10)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr10.splice(9, 9,100)
//console.log(arr10)