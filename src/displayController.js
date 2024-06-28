import { pubsub } from "./pubsub";
export { showFormClickListener, taskDetails }
const taskDialog = document.querySelector(".task-dialog");
const projectDialog = document.querySelector(".project-dialog");
const taskConfirmBtn = document.querySelector(".task-confirm-btn");
const projectConfirmBtn = document.querySelector(".project-confirm-btn");
const addTaskBtn = document.querySelector(".add-task");
const addProjectBtn = document.querySelector(".add-project");
const taskFrom = document.querySelector("#add-task-form");
const projectFrom = document.querySelector("#add-project-form");
const taskDetails = [];


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

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const project = document.getElementById("project").value;
    const priority = document.getElementById("priority").value;
    const date = document.getElementById("do-date").value;
    const status = "unchecked"

    taskDetails.push(title, description, project, priority, date, status);
    pubsub.publish("dataRecived", taskDetails);
    taskDialog.close();
});