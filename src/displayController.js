import { pubsub } from "./pubsub";
export { showFormClickListener, taskDetails, displayTasks}
const taskDialog = document.querySelector(".task-dialog");
const projectDialog = document.querySelector(".project-dialog");
const taskConfirmBtn = document.querySelector(".task-confirm-btn");
const projectConfirmBtn = document.querySelector(".project-confirm-btn");
const addTaskBtn = document.querySelector(".add-task");
const addProjectBtn = document.querySelector(".add-project");
const taskFrom = document.querySelector("#add-task-form");
const projectFrom = document.querySelector("#add-project-form");
const currentView = document.querySelector(".current-view");
const projectList = document.querySelector(".project-list");
const taskDetails = [];
let selectedProject = "Inbox"


function showFormClickListener () {
    // shows the form to add a task when clicked
    addTaskBtn.addEventListener("click", function() {
        taskDialog.showModal();
        taskFrom.reset();
    });    

    // shows the form to add a project when clicked
    addProjectBtn.addEventListener("click", function () {
        projectDialog.showModal();
        projectFrom.reset();
    });
};

taskConfirmBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("description").value;
    const project = document.getElementById("project").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("do-date").value;
    const status = "unchecked"

    taskDetails.push(title, description, project, priority, date, status);
    pubsub.publish("taskRecived", taskDetails);
    taskDialog.close();
});

projectConfirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const title = document.getElementById("projectTitle").value;
    pubsub.publish("projectRecived", title);
    projectDialog.close();
});

const displayTasks = (myProjects) => {
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
    for(const task in tasks) {
        console.log(tasks[task].title);
        const taskList = document.createElement("ul");
        const li = document.createElement("li");
        const taskItem = document.createElement("div");
        const label = document.createElement("label");
        const checkBox = document.createElement("input");
        const taskTitle = document.createElement("span");
        const doDate = document.createElement("div");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        
        taskList.classList.add(".task-list");
        taskItem.classList.add("task-item");

        checkBox.type = "checkbox";
        checkBox.id = `task-${task}`;

        taskTitle.textContent = tasks[task].title;

        doDate.textContent = tasks[task].doDate;
        editBtn.textContent = "Edit Button";
        editBtn.classList.add("task-edit-btn");

        deleteBtn.textContent = "Delete Button";

        taskList.appendChild(li);
        li.appendChild(taskItem);
        label.append(checkBox, taskTitle);
        taskItem.append(label, doDate, editBtn, deleteBtn);
        currentView.append(taskList);
    }
};

const displayProjectList = (myProjects) => {
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

pubsub.subscribe("myProjectsUpdated", displayProjectList);
pubsub.subscribe("myProjectsUpdated", displayTasks);