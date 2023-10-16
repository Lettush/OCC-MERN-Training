//creating a JS object
let students = [
    {
        name: "Althani",
        age: 20,
        grade: 90
    },
    {
        name: "Miguel",
        age: 21,
        grade: 85
    },
    {
        name: "Leonida",
        age: 19,
        grade: 95
    }
];

console.log(students[1].name);
alert("Name of the second student: " + students[1].name);

//gets data from user
let nameInput = prompt("Enter name of the next student: ");
let ageInput = parseInt(prompt("Enter the age of the student: "));
let gradeInput = parseInt(prompt("Grade acquired: "));

//stores all inputted data into a variable
let newStudent = {
    name: nameInput,
    age: ageInput,
    grade: gradeInput
}

//adds new inputted data to the array
students.push(newStudent); 

//looping into an array
students.forEach((student) => {
    console.log(`${student.name}: ${student.grade}`);
})

//creating a JS object
let book = [{
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}]

console.log(book[0].title);
book[0].year = 1930;  // updates year field value wih user input


let library = [];
library.push(book);

console.log(library);

let car = {
        brand: "Toyota",
        model: "Camry",
        year: 2022,

        //creating a method within an object
        startEngine() {
        console.log(`${this.brand} ${this.model}'s engine is starting`);
        }

    }  


console.log(car.model);
car.year = 2023;

//calling the method 
car.startEngine();

let garage = [];
garage.push(car); //inserting an object to an array

let person = {
    name: "Shai",
    age: 27,
    city: "Manila"
}

console.log(person.age);







