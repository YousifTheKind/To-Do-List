import { myProjects, myTasks } from "./create";
export { addToMyTasks, addToMyProjects, changePriority, changeStatus, deleteTask, updateLists, deleteProject };

const addToMyTasks = (task) => {
    myTasks.push(task)
};

const addToMyProjects = (project) => {
    Object.assign(myProjects, project);
};

const updateLists = () => {
    // reset all project tasks
    // for(const key in myProjects) {
    //     myProjects[key] = [];
    // };
    
    for (let i = 0; i < myTasks.length; i++) {
        const task = myTasks[i];
        const projects = Object.keys(myProjects);

        if (projects.includes(task.project)) {
            let projectMatch = projects.find(title => title == task.project);
            myProjects[projectMatch].push(task);
        }
        // if the project got deleted
        else if(!projects.includes(task.project)) {
            console.log("task was assigned to project that was deleted");
        };
    };
};

const changePriority = (task, newPriority) => {
    task.priority = newPriority;
};
const changeStatus = (task) => {
    if(task.status == "unchecked") task.status = "checked";
};
const deleteTask = () => {
    
};
const deleteProject = () => {

};
