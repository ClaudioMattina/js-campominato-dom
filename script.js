
/* ******************************************** FUNZIONIIIIIIII *********************************************** */

/* funzione che restituisce un div con le classi crete da me nel css */
let createSquare = () => {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("box");
    return squareDiv;
}

/* funzione che crea numeri randomici univoci rispetto due valori (uno minimo ed uno massimo) */
function randomNumGenerator (minValue, maxValue){
    /* nel caso il valore non sia giusto stampo un error */
    if( isNaN(parseInt(minValue)) || isNaN(parseInt(maxValue)) ){
        console.error("weeee il valore non è un numero")
    }

    /* operazione per generare un numero random tra due valori indicati */
    return (Math.floor(Math.random() * ((maxValue + 1) - minValue) + minValue))
}

/* funzione che genera numeri randomici unici da quelli generati.. inserendo in una blacklist quelli già generati */
function randomNumbersOnly (blackList, minN, maxN){
    let check = false;
    let randomItem;

    while (!check){
        randomItem = Math.floor(Math.random() * ((maxN + 1) - minN) + minN);
        if( !blackList.includes(randomItem)){
            check = true ;
        }
    }
    return randomItem;
}

/* funzione che genera bombe in base alle caselle indicate */

function bombGeneration (nBombs,nCell){
    let bombList = [];
    for(i = 0 ; i < nBombs ; i++){
        bombList.push(randomNumbersOnly(bombList, 1, nCell))
    }
    return bombList;
}

function writePoint(nameId, stringa){
    document.getElementById(nameId).innerHTML = stringa;
}

/* **************************************************************************************************************** */


/* collego il main nel js */
let main = document.querySelector("main");

/* collego nel js il contenitore grid*/
let grid = document.getElementById("grid");

let gridVuota = document.getElementById("grid-vuota");

/* collego l'input nel js */
let inputDifficoltà = document.getElementById("difficoltà");

/* collego il bottone play con js */
let buttonPlay = document.getElementById("my-button");

/* collego il contenitore dove ci sarà scritto il punteggio */


let point = 0;



/* aggiungo al bottone una funzionalità */ /* ovvero quella che al click del bottone si genera una griglia in base al valore della difficoltà */
buttonPlay.addEventListener("click", function() {

    /* aggiungo il reset */
     grid.innerHTML = "";

    if(inputDifficoltà.value == "facile"){

         /* genero bombe 16 bombe con numeri random */
         const bombes = bombGeneration(16, 100);
         console.log(bombes);


        /* CICLO FOR CHE CREA LA SERIE DI QUADRATINI */
        for(i = 1; i <= 100; i++){
            /* creo una varialbile che crei un elemento tramite la funzione che ho creato */
            let realSquare = createSquare();

            if(!bombes.includes(i)){

                 /* aggiungo funzionalità al click con l'eventlistener */
                 /* che dice "al click aggiungi la classe clicked (classe che ho creato nel css)" */
                 realSquare.addEventListener("click" , function(){
                 realSquare.classList.toggle("clicked");
                 point++
                 writePoint("point", `Il tuo punteggio è : ${point}`)
                 
                })
            }
            else{
                realSquare.addEventListener("click" , function(){
                realSquare.classList.toggle("clicked-bomb");
                writePoint("point", `Hai perso.. il tuo punteggio è : ${point}`)
                point=0;
                })
            }
           
            
            /* adesso inserisco lo square nel parent che volgio (in questo caso nel grid) */
            grid.appendChild(realSquare);
        }

       
        
    }
    
    else if(inputDifficoltà.value == "medio"){


            /* genero bombe 16 bombe con numeri random */
            const bombes = bombGeneration(16, 81);
            console.log(bombes);

            /* CICLO FOR CHE CREA LA SERIE DI QUADRATINI */
            for(i = 1; i <= 81; i++){
                /* creo una varialbile che crei un elemento tramite la funzione che ho creato */
                let realSquare = createSquare();
                realSquare.classList.add("box-media")
                
                
               if(!bombes.includes(i)){
                    /* aggiungo funzionalità al click con l'eventlistener */
                    /* che dice "al click aggiungi la classe clicked (classe che ho creato nel css)" */
                    realSquare.addEventListener("click" , function(){
                    realSquare.classList.toggle("clicked");
                    point++
                    writePoint("point", `Il tuo punteggio è : ${point}`)
                    })
               }
               else{
                    realSquare.addEventListener("click" , function(){
                    realSquare.classList.toggle("clicked-bomb");
                    writePoint("point", `Hai perso.. il tuo punteggio è : ${point}`)
                    point=0;
                    })
                }
    
                /* adesso inserisco lo square nel parent che volgio (in questo caso nel grid) */
                grid.appendChild(realSquare);
            }       

    
    }
    
    else {      
            /* genero bombe 16 bombe con numeri random */
            const bombes = bombGeneration(16, 49);
            console.log(bombes);

          /* CICLO FOR CHE CREA LA SERIE DI QUADRATINI */
          for(i = 1; i <= 49; i++){
            /* creo una varialbile che crei un elemento tramite la funzione che ho creato */
            let realSquare = createSquare();
            realSquare.classList.add("box-difficile")


            if(!bombes.includes(i)){
                /* aggiungo funzionalità al click con l'eventlistener */
                /* che dice "al click aggiungi la classe clicked (classe che ho creato nel css)" */
                realSquare.addEventListener("click" , function(){
                realSquare.classList.toggle("clicked");
                point++
                writePoint("point", `Il tuo punteggio è : ${point}`)
                })
            }
            else{
                realSquare.addEventListener("click", function(){
                realSquare.classList.toggle("clicked-bomb")
                writePoint("point", `Hai perso.. il tuo punteggio è : ${point}`)
                point=0;
                
                })
            }
            
            
            /* adesso inserisco lo square nel parent che volgio (in questo caso nel grid) */
            grid.appendChild(realSquare);
        }
    }
 
    

})

