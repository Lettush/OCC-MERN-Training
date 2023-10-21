
//access text field where users type new tasks
const addTaskInput = document.getElementById("taskInput");

//access ul tag
const ulTask = document.getElementById("taskList");



//access add task button
const addTaskButton = document.querySelector("button");

//add event listener to button
addTaskButton.addEventListener("click", addTask)



//add event listener to the UL tag 
ulTask.addEventListener("click", deleteTask);



function addTask(event) {

    event.preventDefault(); //prevents browser from refreshing


    //creates individual div task container
    const taskDiv = document.createElement('div');

    //adds a classname to the div created
    taskDiv.classList.add("task-container");



    //creates individual list task under ul
    const taskList = document.createElement('li');

    //adds a classname to the list created
    taskList.classList.add("task-list");

    //set task title from task input field
    taskList.innerText = addTaskInput.value;

    //sets this list to be a child of the div created
    taskDiv.appendChild(taskList);



    //adds a delete button for every task
    const taskDeleteButton = document.createElement('button');

    //adds a classname to the delete button created
    taskDeleteButton.classList.add("delete-button")

    //sets DEL as the buttonn's label
    taskDeleteButton.innerHTML = "DEL"

    //sets this button to be a child of the div created
    taskDiv.appendChild(taskDeleteButton);



    //sets the div created to be a child of the ul tag
    ulTask.appendChild(taskDiv);

    //removes input text inside tasks input field
    addTaskInput.value = "";

    console.log(taskList.innerText + " has been added")

}



function deleteTask(event) {

    event.preventDefault();

    //e.target : captures the element that was clicked on the webpage
    const clickedButton = event.target;

    
    //checks if the button clicked has a class name of delete-button
    if (clickedButton.classList[0] === "delete-button") {

        //captures the parent element of the button clicked
        const taskDiv = clickedButton.parentElement;

        //accessing a child of a parent
        //.innerText : extract a text content from an element
        const childAccess = taskDiv.querySelector(".task-list").innerText;

        console.log(childAccess + " has been deleted");

        
        //removes the container of the task (li)
        taskDiv.remove();
        
    }

}























