//This is a portfoli project on JS Syntax


const fuel = ["electricity", "gasoline", "diesel", "hybrid"];
const carBrand = ["Saab", "Toyota", "Skoda", "BMW" ];
const carPrice = ["affordable", "more than 500 000", "Do they even exist anymore?", "to expensive"];

const selectFuel = fuel[Math.floor(Math.random()*fuel.length)]; 
const selectCarBrand = carBrand[Math.floor(Math.random()*carBrand.length)];
const selectCarPrice = carPrice[Math.floor(Math.random()*carPrice.length)]

console.log( `You should buy a car that runs on ${selectFuel} , the brand should be ${selectCarBrand},
    And you should spend ${selectCarPrice} kr`);
