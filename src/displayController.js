export { showForms }
const taskDialog = document.querySelector(".task-dialog");
const taskConfirmBtn = document.querySelector(".task-confirm-btn");
const closeDialogBtn = document.querySelector(".cancel-btn");
const addTask = document.querySelector(".add-task");
const taskFrom = document.querySelector("#add-task-form");

function showForms () {
    addTask.addEventListener("click", function() {
        taskDialog.showModal();
        taskFrom.reset();
    });    
};
