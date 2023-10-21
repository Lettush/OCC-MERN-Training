
//accessing text fields
const loanAmount = document.getElementById("loanAmount");
const interestRate = document.getElementById("interestRate");
const yearTerm = document.getElementById("loanTerm");


//accessing calculate button
const calcButton = document.querySelector("button");

//giving calculate button a function
calcButton.addEventListener("click", calculate);


//accessing result field
const resultField = document.getElementById("result");


//function for calculate button 
function calculate(event) {

    event.preventDefault();

    //monthly payment formula
    const monthlyPayment = ((loanAmount.value * (interestRate.value / 100) * (1 + (interestRate.value / 100)) ** (yearTerm.value*12)) / (((1 + (interestRate.value / 100)) ** (yearTerm.value*12)) - 1)).toFixed(2);

    resultField.innerHTML = "Monthly Payment: $" + monthlyPayment;

    //console.log(monthlyPayment);
 

}








