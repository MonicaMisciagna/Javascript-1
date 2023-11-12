let tabellone=document.querySelector('#tabellone')
let firstButton= document.querySelector('header button');
let numEstratti=[]
firstButton.addEventListener('click',()=>{creaTabellone()});
firstButton.addEventListener('click',()=>{hideButton()});

function hideButton() {
       
    let firstButton = document.querySelector('header button');
     firstButton.style.display = "none";
 }
function creaTabellone() {
for (let i = 0; i < 76; i++) {
        var celleTabellone = document.createElement('div') 
        celleTabellone.className= 'numero' ;
        //var h3= document.createElement('h3')  ;
        celleTabellone.innerText=( i + 1);
        //celleTabellone.appendChild(numero); 
        tabellone.appendChild(celleTabellone);
    }


let container= document.querySelector('.container');
let button = document.createElement("button")
button.innerText='PESCA!'
button.style.backgroundColor= '#F59557'
button.style.color='white'
button.style.border='none'
button.style.fontFamily='Playpen Sans, cursive;'
button.style.fontSize='1em'
container.appendChild(button)
button.addEventListener("click", () =>{
    let celle = document.querySelectorAll("#tabellone div")
    let number = Math.floor(Math.random() * 76)
    if (!numEstratti.includes(number)) {
        numEstratti.push(number);
     
    console.log(number)
    celle.forEach(cella  => {
      celle[number].style.backgroundColor = "#FBCCB0";
     celle[number].style.color = "white";
    })}})

}


        
  