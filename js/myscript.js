// 1 chiedere quanti km ed età del paseggero

const distance = parseInt (prompt ("Quanti km intendi percorrere?"));
console.log( distance);

const age = parseInt (prompt ("Quanti anni hai?"));
console.log(age);

// prezzo intero 
const price = (distance * 0.21);

// sconto in base all'età 
let discountOver = (price * 0.40);
let discountJunior = (price * 0.20);

// prezzo scontato 
let discountPriceOver = (price - discountOver);
let discountPriceJunior = (price - discountJunior);


// calcolo del prezzo finale al cliente in base al'età 

if (age < 18) {
    document.getElementById ("final-price").innerHTML = discountPriceJunior;
} else if (age > 65) {
    document.getElementById ("final-price").innerHTML = discountPriceJunior;
}
else {
    document.getElementById ("final-price").innerHTML = price;
}