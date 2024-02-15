const { serialize } = require("v8");

//1. Create an array of pizzaToppings with at least four different toppings//
const pizzaToppings = ["mushrooms", "pepperoni", "sausage", "hamburger"];

//2. Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c",//

//let name = "Maria"

function greetCustomer() {
  //return (('Hello ${name}!');
  let greeting = "Welcome, we have four toppings today: ";
  for (let pizzaTopping of pizzaToppings) {
    greeting += ` ${pizzaTopping},`;
  }
  console.log(greeting);
}
greetCustomer();

// function welcome(name) {
//     return '${name} welcome, we have the following four delicious toppings today!`;

//     for pizzaToppings (let i=0; 1< pizzaToppings.length; i++) {
//     console.log(pizzaToppings[i]);
// }

// 3. Create a getPizzaOrder function that//
// has the parameters size, crust, and an indefinite amount of toppings as inputs//
// prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"//
// outputs a list with the size, crust, and toppings//

function getPizzaOrder(size, crust, ...toppings) {
  //   return "One large thick crust pizza with [pizzaToppings]";
}
// console.log(getPizzaOrder);
//4. Create a preparePizza function that
//has an array as its parameter with three items: a size, a crust, and a list of toppings
//prints something like "...Cooking pizza..."
//outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings//

// function preparePizza () {

// }
// const preparePizza = {
//     size: "large"
//     crust: "thin"
//     toppings: [
//     "Mushroom"
//     "Sausage"
//     "Sausage"
// ]
// }
//5. Create a servePizza function that
// has a parameter of a pizza Object
// logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
// outputs the same pizza Object that was passed in//

// function servePizza() {
//   return "Order up! Here's your large thick crust pizza with [pizzaToppings], Enjoy!";
// }

//Call each function and (starting with preparePizza) use the returned value from the previous function as its input//
