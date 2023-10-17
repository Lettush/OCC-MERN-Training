const body = document.body;
const div = document.createElement("div");
div.innerHTML = "I love softdrinks";

body.append(div);
body.append("with cookies\n", "but with chocolate");

let count = 0;

document.getElementById("addBtn").addEventListener("click", addOne);
document.getElementById("subBtn").addEventListener("click", minus);
document.getElementById("resetBtn").addEventListener("click", reset);


function addOne() {
    count++;
    document.getElementById("demo").innerHTML = count;
}

function minus() {
    count--;
    document.getElementById("demo").innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById("demo").innerHTML = count;
}

