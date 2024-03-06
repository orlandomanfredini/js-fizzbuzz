// --- Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// Scrivo un programma, usando ciclo for, per stampare numeri da 1 a 100//

let n = 100; //number

//Uso ciclo for per assegnare valori ai multipli di 3 e 5 


// --- BONUS 1:
// Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
// Potete usare innerHTML oppure il metodo append creando l’elemento come oggetto usando createElement

// BONUS 2:
// Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, 
// a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.



// ...PROVO A USARE CREATE.ELEMENT



let ulList = document.getElementById('ul-list'); //element


for(let i = 1; i <= n; ++i){

   let liObject = document.createElement('li'); //element
   liObject.classList.add('list-item'); 

   
   

   
    let x3 = i % 3; //number
    let x5 = i % 5; //numer
    let x15 = i % 15; //number
    
    if(x15 === 0){
        liObject.innerHTML += 'FizzBuzz'
        liObject.classList.add('fizzbuzz')
    } else if (x5 === 0){
        liObject.innerHTML += ' Buzz'
        liObject.classList.add('buzz')
    } else if (x3 === 0){
        liObject.innerHTML += ' Fizz'
        liObject.classList.add('fizz')
    } else{
        liObject.innerHTML += i 
        liObject.classList.add('number')
        
    }


    ulList.append(liObject); //element

    
}


