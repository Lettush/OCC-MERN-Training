// function declaration
// function greet(){
//     console.log('hello there');
//   }
  
  // function expression
//   const speak = function(){
//     console.log('good day!');
//   };
  
  // greet();
  // greet();
  
//   speak();



  // arguments & parameters

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time}, ${name}!`);
//   };
  
  // speak('mario', 'morning');
  // speak();
//   speak('shaun');



  // return statements

// const speak = function(name, time){
//   console.log(`good ${time}, ${name}!`);
// };

// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
//   }
  
//   const area = calcArea(5);
//   console.log('area is:', area);



  // arrow functions

// regular function
// const calcArea = function(radius){
//   return 3.14 * radius**2;
// }

// arrow function
// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is:', area);

// practise arrow functions

// const greet = function(){
//   return 'hello, world';
// }

// const greet = () => 'hello, world';

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// const bill = (products, tax) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i]  + products[i] * tax;
//   }
//   return total;
// }

// console.log(greet());
// console.log(bill([10,15,30], 0.2));



// callbacks & forEach
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
//   console.log(`${index} - hello ${person}`);
// }

// people.forEach(person => {
//   console.log(`hello ${person}`);
// });

// people.forEach(logPerson);


// ul reference
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``;

people.forEach(person => {
  // create html template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;