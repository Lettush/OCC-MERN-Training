
let startNum = parseInt(prompt("Enter the starting number: "));
let endNum = parseInt(prompt("Enter the last number: "));

let range = [];

for(i=startNum; i<=endNum; i++) {
    range.push(i);
}

alert(range.join('\n'));