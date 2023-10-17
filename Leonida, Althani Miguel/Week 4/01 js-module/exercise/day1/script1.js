
let score = parseInt(prompt('Enter the score: '));
//parseInt: Converts the inputted score from string to integer
//prompt: pop up box that accepts value from user

let grade;

switch(true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80 && score <= 89:
        grade = "B";
        break;
    case score >= 70 && score <= 79:
        grade = "C";
        break;
    case score >= 60 && score <= 69:
        grade = "D";
        break;
    default:
        grade = "F";
        break;
}

alert("The grade for the score " + score + " is " + grade + ".");