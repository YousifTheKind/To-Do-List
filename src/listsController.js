import { myProjects, myTasks } from "./create";
import { pubsub } from "./pubsub";
export { addToMyTasks, addToMyProjects, changePriority, changeStatus, deleteTask, updateLists, deleteProject };


const addToMyTasks = (task) => {
    myTasks.push(task);
    pubsub.publish("myTasksUpdated");
};

const addToMyProjects = (project) => {
    Object.assign(myProjects, project);
    pubsub.publish("myProjectsUpdated", myProjects);
};

const updateLists = () => {
    // reset all project tasks
    for(const key in myProjects) {
        myProjects[key] = [];
    };
    
    for (const task of myTasks) {
        const projects = Object.keys(myProjects);
        if (projects.includes(task.project)) {
            let projectMatch = projects.find(title => title == task.project);
            myProjects[projectMatch].push(task);
        }
        // if the project got deleted
        else {
            console.log("task was assigned to project that was deleted");
        };
    };
    pubsub.publish("ListsUpdated", myProjects);
    console.log(myProjects);
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

pubsub.subscribe("myProjectsUpdated" , updateLists);
pubsub.subscribe("myTasksUpdated" , updateLists);
pubsub.subscribe("taskCreated", addToMyTasks);
pubsub.subscribe("projectCreated", addToMyProjects);
