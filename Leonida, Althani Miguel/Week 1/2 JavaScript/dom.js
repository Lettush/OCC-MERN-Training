//store reference to a variable
//document is the html representation where Javascipt interacts
//querySelector('p'): searches the DOM and grabs the first element that matches the seletor. This is used for us to interact this specific tag/element.  
let para = document.querySelector('p');
console.log(para);

//querySelectorAll('p'): grabs all the p element and sotre in a single node list
para = document.querySelectorAll('p');
console.log(para);

//extracts the second p element
console.log(para[1]);


//grabs all element with a class error
para = document.querySelector('.error');
console.log(para);