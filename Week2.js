let pizzaPlace = "Maria's Pizza";
let numberofToppings = 3;

console.log(pizzaPlace);

console.log(typeof "pizzaPlace");

console.log(numberofToppings);

console.log(typeof "numberofToppings");

console.log(typeof 3);

let sentence = `Welcome to ${pizzaPlace} where we have ${numberofToppings} unique toppings!`;

console.log(sentence);

let greeting = "Quality, not quantity.";

if (numberofToppings <= 3) {
  greeting = "Quality, not quantity.";
} else {
  greeting = "A whole lot of pizza!";
}
