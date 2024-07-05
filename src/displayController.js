import { pubsub } from "./pubsub";
import { format } from "date-fns";
import { myProjects, myTasks } from "./create";
export { displayProjectList, addProjectsToDropdownList }
const taskDialog = document.querySelector(".task-dialog");
const projectDialog = document.querySelector(".project-dialog");
const addTaskBtn = document.querySelector(".add-task");
const addProjectBtn = document.querySelector(".add-project");
const taskForm = document.querySelector("#add-task-form");
const projectFrom = document.querySelector("#add-project-form");
const currentView = document.querySelector(".current-view");
const projectList = document.querySelector(".project-list");
const cancelBtns = document.querySelectorAll(".cancel-btn");
const editTask = document.querySelector(".edit-task");
const taskFormConfirmBtn = document.querySelector(".task-confirm-btn");
let taskIndex = ""
let selectedProject = "Inbox"

// make sure the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // shows the form to add a task when clicked
    addTaskBtn.addEventListener("click", function() {
        taskDialog.showModal();
        taskForm.reset();

        taskFormConfirmBtn.style.display = "block";
        editTask.style.display = "none";
    });    

    // shows the form to add a project when clicked
    addProjectBtn.addEventListener("click", function () {
        projectDialog.showModal();
        projectFrom.reset();
    });

    cancelBtns.forEach((btn) => {
        btn.addEventListener("click", () =>{
            btn.closest("dialog").close();
        });
    });

});

taskFormConfirmBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    // make sure all required fields are filled
    for(const element of taskForm.querySelectorAll("[required]")) {
        if (!element.reportValidity()) {
            alert("All fields are required");
            return;
        };
    };

    //if all fields are filled then get the values and send it to createTask
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("description").value;
    const project = document.getElementById("project").value;
    const priority = document.getElementById("priority").value;
    let date = new Date(document.getElementById("do-date").value);
    
    //reformat the date
    date = format(date, "dd/MM/yyyy");

    pubsub.publish("taskRecived", title, description, date, priority, project);

    // reset and close the form
    taskForm.reset();
    taskDialog.close();  
});

editTask.addEventListener("click", (e) => {
    console.log("im clicked");
    e.preventDefault()
    const editedTask = {
        title: document.getElementById("taskTitle").value,
        description: document.getElementById("description").value,
        project: document.getElementById("project").value,
        priority: document.getElementById("priority").value,
        date: document.getElementById("do-date").value
    };

    taskForm.reset();
    taskDialog.close();       
    pubsub.publish("taskEdited", editedTask, taskIndex);
});   

projectFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("projectTitle").value;
    pubsub.publish("projectRecived", title);
    projectDialog.close();
});


const displayTasks = () => {
    //clearing view
    currentView.replaceChildren();
    
    // create the element for the selected project
    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = selectedProject;
    currentView.appendChild(projectName);

    // get the tasks for the selected project
    const tasks = myProjects[selectedProject];

    //create the elements for the currently selected project
    const taskList = document.createElement("ul");
    taskList.classList.add(".task-list");
    currentView.append(taskList);

    for(const task in tasks) {
        const li = document.createElement("li");
        const taskItem = document.createElement("div");
        const checkBox = document.createElement("input");
        const taskTitle = document.createElement("span");
        const date = document.createElement("div");
        const description = document.createElement("div");
        const priority = document.createElement("div");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        
        taskItem.classList.add("task-item");
        li.setAttribute("index", tasks[task].indexInMyTasks);

        checkBox.type = "checkbox";

        taskTitle.textContent = tasks[task].title;

        date.textContent = tasks[task].date;
        description.textContent = tasks[task].description;
        priority.textContent = tasks[task].priority;
        editBtn.textContent = "Edit";
        editBtn.classList.add("task-edit-btn");
        deleteBtn.classList.add("task-delete-btn");

        deleteBtn.textContent = "Delete";

        taskList.appendChild(li);
        li.appendChild(taskItem);
        taskItem.append(checkBox, taskTitle, description, priority, date, editBtn, deleteBtn);
    };
};

const displayProjectList = () => {
    //clearing the DOM
    projectList.replaceChildren();

    // get a list of projects
    let projects = Object.keys(myProjects);

    // create the project list on the side bar
    projects.forEach((p) => {
        const listItem = document.createElement("button");
        listItem.textContent = p;
        projectList.appendChild(listItem);

        // event listener to change the selected project
        listItem.addEventListener("click", (e) => {
            e.preventDefault();
            selectedProject = p;
            pubsub.publish("myProjectsUpdated", myProjects);
        });
    });
};

const addProjectsToDropdownList = () => {
    const selectElm = document.querySelector("#project");
    selectElm.replaceChildren()
    const projects = Object.keys(myProjects);
    projects.forEach((pName) => {
        const option =  document.createElement("option");
        option.textContent = pName;
        option.value = pName;
        console.log(option);
        if(option.value == "inbox") option.selected = selected;
        selectElm.appendChild(option);
    });
};

// click listener for delete and edit buttons and all events inside current-view
document.querySelector(".current-view").addEventListener("click", (e) => {
    console.log(e.target);
    // delete button handler
    if(e.target.className === "task-delete-btn") {
        // send the task index to deleteTask
        taskIndex = e.target.closest("li").getAttribute("Index");
        pubsub.publish("taskDeleted", taskIndex);
    };
    
    // edit button handler
    if(e.target.className === "task-edit-btn") {
        taskIndex = e.target.closest("li").getAttribute("Index");
        // show the modal and the form
        taskDialog.showModal();
        taskForm.reset();

        // populate the form input fields with the object data
        document.getElementById("taskTitle").value = myTasks[taskIndex].title;
        document.getElementById("description").value = myTasks[taskIndex].description;
        document.getElementById("project").value = myTasks[taskIndex].project;
        document.getElementById("priority").value = myTasks[taskIndex].priority;
        document.getElementById("do-date").value = myTasks[taskIndex].date;

        // hide the confirm button that submits the form and show the edit button
        taskFormConfirmBtn.style.display = "none";
        editTask.style.display = "block";
    };

    if(e.target.type == "checkbox" && e.target.checked) {
        e.target.closest(".task-item").style.textDecoration = "line-through";
        e.target.closest(".task-item").style.opacity = "0.5";
    }
    else if(e.target.type == "checkbox" && !e.target.checked){
        e.target.closest(".task-item").style.textDecoration = "none";
        e.target.closest(".task-item").style.opacity = "1";
    }

});


pubsub.subscribe("ListsUpdated", displayProjectList);
pubsub.subscribe("ListsUpdated", displayTasks);
pubsub.subscribe("ListsUpdated", addProjectsToDropdownList);
