// date variables
let date = new Date();
let mm = date.getMonth();
let dd = date.getDate();
let yyyy = date.getFullYear();

//Local storage variables
const pendingToDos = localStorage.getItem("storedPendingToDos") 

let tblHeaders = document.querySelectorAll(".tblHeaders");

let [tblHeadersPendingToDos, tblHeadersCompletedToDos, tblHeadersSavedNotes] = tblHeaders;

//Table Bodies
let tblPendingTodos = document.querySelector(".pendingToDos");
let tblCompletedToDos = document.querySelector(".completedToDos");
let tblSavedNotes = document.querySelector(".savedNotes");

// ToDo List Elements
let todo = document.getElementById("todo");
let due = document.getElementById("due");
let saveToDo = document.getElementById("saveToDo");

const handlerSaveToDo = (event) => {
    event.preventDefault()

    if (todo.value === null || due.value === null) {
        alert("To Do and Due Date is empty")
    } else {
        const objToDo = {
            todoID: Date.now(),
            todoCreated: `${yyyy}-${mm + 1}-${dd}`,
            todoDueDate: due.value,
            todoDetails: todo.value,
        };

        //Create td element
        let tdTodoText = document.createElement("td");
        tdTodoText.setAttribute("scope", "row");
        tdTodoText.className = "ps-4";
        tdTodoText.innerHTML = `<small>Created: ${objTodo.todoCreated}<br>Due: ${objTodo.todoDueDate}</small> <p>${objToDo.todoDetails}</p>`;

        //Create tr element
        let trTodo = document.createElement("tr");

        //Append the td into tr
        trTodo.appendChild(tdTodoText);

        //Append the td into tr
        tblPendingTodos.prepend(trTodo);

        // console.log(objToDo);

        todo.value = null;
        due.value = null;
    }
};

saveToDo.addEventListener("click", handlerSaveToDo);




