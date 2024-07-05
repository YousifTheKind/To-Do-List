import { pubsub } from "./pubsub";
import { format } from "date-fns";
import { myProjects, myTasks } from "./create";
export { displayProjectList, addProjectsToDropdownList }

// grabbing html elements
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

// used to grab the task index from the "index" property on the closest li element
// used to delete and edit tasks 
let taskIndex = ""

// currently selected project, inbox by default
let selectedProject = "Inbox"

// make sure the page is loaded
document.addEventListener("DOMContentLoaded", () => {

    // shows the form to add a task when clicked
    addTaskBtn.addEventListener("click", function() {
        // show and reset the form
        taskDialog.showModal();
        taskForm.reset();

        // show the button that creates a task and hide the button that edits the task
        taskFormConfirmBtn.style.display = "block";
        editTask.style.display = "none";
    });

    // shows the form to add a project when clicked
    addProjectBtn.addEventListener("click", function () {
        projectDialog.showModal();
        projectFrom.reset();
    });

    // handle the cancel button both forms
    cancelBtns.forEach((btn) => {
        btn.addEventListener("click", () =>{
            btn.closest("dialog").close();
        });
    });

});

// handle the confirm button on the task form
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
    const date = document.getElementById("do-date").value;
    
    // let createTask know that task data is received and pass it the data
    pubsub.publish("taskRecived", title, description, date, priority, project);

    // reset and close the form
    taskForm.reset();
    taskDialog.close();  
});

// handle the "save" button when user edits the task
editTask.addEventListener("click", (e) => {
    e.preventDefault();

    // create a new object that holds the edited object
    const editedTask = {
        title: document.getElementById("taskTitle").value,
        description: document.getElementById("description").value,
        project: document.getElementById("project").value,
        priority: document.getElementById("priority").value,
        date: document.getElementById("do-date").value
    };

    // reset and close the form
    taskForm.reset();
    taskDialog.close();       
    
    // pass the index of the original task in myTasks along with the edited task object to editTask function
    pubsub.publish("taskEdited", editedTask, taskIndex);
});   

// handle the project form
projectFrom.addEventListener("submit", (e) => {
    e.preventDefault();

    // get the value the user entered
    const title = document.getElementById("projectTitle").value;

    // check if the project already exists
    if(myProjects.hasOwnProperty(title)) {
        alert("Project Already Exists!");
    }
    else {
        // call createProject and pass it the title
        pubsub.publish("projectRecived", title);
        projectDialog.close();
    };
});

// handle displaying tasks on the current view
const displayTasks = () => {
    //clearing view
    currentView.replaceChildren();
    
    // create the element for the selected project
    const projectName = document.createElement("div");
    projectName.classList.add("project-name");
    projectName.textContent = selectedProject;
    currentView.appendChild(projectName);

    // create the ul that will hold all of the tasks as li-s
    const taskList = document.createElement("ul");
    taskList.classList.add(".task-list");
    currentView.append(taskList);

    // get the tasks for the selected project
    const tasks = myProjects[selectedProject];

    // for each task under the selected project
    for(const task in tasks) {
        // create the elements for the task
        const li = document.createElement("li");
        const taskItem = document.createElement("div");
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        const taskTitle = document.createElement("span");
        const date = document.createElement("div");
        const description = document.createElement("div");
        const priority = document.createElement("div");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        
        // add classes for styling
        taskItem.classList.add("task-item");
        editBtn.classList.add("task-edit-btn");
        deleteBtn.classList.add("task-delete-btn");

        // set the task index on the li element
        li.setAttribute("index", tasks[task].indexInMyTasks);

        // se the textContent for the elements
        taskTitle.textContent = tasks[task].title;
        // display the reformatted date
        date.textContent = format(new Date(tasks[task].date), "dd/MM/yyyy");
        description.textContent = tasks[task].description;
        priority.textContent = tasks[task].priority;
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "Delete";

        // append the elements
        taskList.appendChild(li);
        li.appendChild(taskItem);
        taskItem.append(checkBox, taskTitle, description, priority, date, editBtn, deleteBtn);
    };
};

// handles displaying the project list on the sidebar
const displayProjectList = () => {

    //clearing the DOM
    projectList.replaceChildren();

    // get an array of projects
    let projects = Object.keys(myProjects);

    // for each project on the myProjects
    projects.forEach((p) => {
        // create a button for the project and for removing the project
        const listItem = document.createElement("button");
        const removeProject = document.createElement("button");

        // create a container that will hold both buttons
        const buttonsDiv = document.createElement("div");

        // set the textContent for both buttons
        listItem.textContent = p;
        removeProject.textContent = "Remove";

        // set the class for the remove button
        removeProject.classList.add = "project-remove-btn";

        // if it's not the default project (inbox)
        if(listItem.textContent !== "Inbox") {
            // append both buttons to the button container
            buttonsDiv.append(listItem, removeProject);
            
            // event listener for the remove button
            removeProject.addEventListener("click", () => {
                const nameOfProjectToBeRemoved = listItem.textContent;

                // send the project name to the deleteProject function
                pubsub.publish("projectDeleted", nameOfProjectToBeRemoved);

                // reset the current view to inbox
                selectedProject = "Inbox";
                pubsub.publish("myProjectsUpdated", myProjects);
            });

            // append the button container to the list
            projectList.appendChild(buttonsDiv);
        }
        // if it's the default project then just append it to the list
        else projectList.appendChild(listItem);

        // event listener to change the selected project
        listItem.addEventListener("click", (e) => {
            e.preventDefault();
            selectedProject = p;
            pubsub.publish("myProjectsUpdated", myProjects);
        });
    });
};

// handle the the dropdown menu on the task form
const addProjectsToDropdownList = () => {
    const selectElm = document.querySelector("#project");
    selectElm.replaceChildren()
    const projects = Object.keys(myProjects);
    projects.forEach((pName) => {
        const option =  document.createElement("option");
        option.textContent = pName;
        option.value = pName;
        if(option.value == "inbox") option.selected = selected;
        selectElm.appendChild(option);
    });
};

// click listener for delete and edit buttons and checkbox
document.querySelector(".current-view").addEventListener("click", (e) => {
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

        // hide the confirm button that creates a new task and show the edit button
        taskFormConfirmBtn.style.display = "none";
        editTask.style.display = "block";
    };

    // handle the checkbox styling
    if(e.target.type == "checkbox" && e.target.checked) {
        e.target.closest(".task-item").style.textDecoration = "line-through";
        e.target.closest(".task-item").style.opacity = "0.5";
    }
    else if(e.target.type == "checkbox" && !e.target.checked){
        e.target.closest(".task-item").style.textDecoration = "none";
        e.target.closest(".task-item").style.opacity = "1";
    };
});

// these functions will be called every time listsUpdated is published
pubsub.subscribe("listsUpdated", displayProjectList);
pubsub.subscribe("listsUpdated", displayTasks);
pubsub.subscribe("listsUpdated", addProjectsToDropdownList);