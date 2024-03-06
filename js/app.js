// --- Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// Scrivo un programma, usando ciclo for, per stampare numeri da 1 a 100//

let n = 100; //number

//Uso ciclo for per assegnare valori ai multipli di 3 e 5 

for(let i = 1; i <= n; ++i){

    let x3 = i % 3;
    let x5 = i % 5;
    let x15 = i % 15;
    
    if(x15 === 0){
        console.log('FizzBuzz')
    } else if (x5 === 0){
        console.log('Buzz')
    } else if (x3 === 0){
        console.log('Fizz')
    } else{
        console.log(i)
    }
}