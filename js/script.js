// ADD VARIABLES
let distance = prompt("inserisci quanti chilometri vuoi percorrere");
let age = prompt("inserisci la tua età");

// EXECUTING PROGRAM
let price = distance* 0.21;
if(age > 65){
    price = price - (price * 0.4)
} else if(age < 18){
    price = price - (price * 0.2)
}
// VIODEO OUTPUT
document.getElementById("priceticket").innerHTML = "il prezzo del biglietto è:" + price.toFixed(2);