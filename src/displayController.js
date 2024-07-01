import { pubsub } from "./pubsub";
export { showFormClickListener, displayTasks}
const taskDialog = document.querySelector(".task-dialog");
const projectDialog = document.querySelector(".project-dialog");
const addTaskBtn = document.querySelector(".add-task");
const addProjectBtn = document.querySelector(".add-project");
const taskFrom = document.querySelector("#add-task-form");
const projectFrom = document.querySelector("#add-project-form");
const currentView = document.querySelector(".current-view");
const projectList = document.querySelector(".project-list");
const cancelBtns = document.querySelectorAll(".cancel-btn");
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

taskFrom.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskDetails = [];

    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("description").value;
    const project = document.getElementById("project").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("do-date").value;
    const status = "unchecked"

    taskDetails.push(title, description, date, priority, project, status);
    pubsub.publish("taskRecived", taskDetails);
    taskFrom.reset();
    taskDialog.close();
});

projectFrom.addEventListener("submit", (e) => {
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
    const taskList = document.createElement("ul");
    taskList.classList.add(".task-list");
    currentView.append(taskList);

    for(const task in tasks) {
        const li = document.createElement("li");
        const taskItem = document.createElement("div");
        const label = document.createElement("label");
        const checkBox = document.createElement("input");
        const taskTitle = document.createElement("span");
        const doDate = document.createElement("div");
        const description = document.createElement("div");
        const priority = document.createElement("div");
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        
        taskItem.classList.add("task-item");
        li.setAttribute("index", tasks[task].indexInMyTasks);

        checkBox.type = "checkbox";
        checkBox.id = `task-${task}`;

        taskTitle.textContent = tasks[task].title;

        doDate.textContent = tasks[task].doDate;
        description.textContent = tasks[task].description;
        priority.textContent = tasks[task].priority;
        editBtn.textContent = "Edit";
        editBtn.classList.add("task-edit-btn");
        deleteBtn.classList.add("task-delete-btn");

        deleteBtn.textContent = "Delete";

        taskList.appendChild(li);
        li.appendChild(taskItem);
        label.append(checkBox, taskTitle);
        taskItem.append(label, description, priority,doDate, editBtn, deleteBtn);

        deleteBtn.addEventListener("click", (e) => {
            const taskIndex = e.target.closest("li").getAttribute("Index");
            pubsub.publish("taskDeleted", taskIndex)
        });
    };


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

cancelBtns.forEach((btn) => {
    btn.addEventListener("click", () =>{
        btn.closest("dialog").close();
    });
});

function addProjectsToDropdownList (myProjects) {
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



pubsub.subscribe("ListsUpdated", displayProjectList);
pubsub.subscribe("ListsUpdated", displayTasks);
pubsub.subscribe("ListsUpdated", addProjectsToDropdownList);
// pubsub.subscribe("ListsUpdated", deleteBtnListener)
