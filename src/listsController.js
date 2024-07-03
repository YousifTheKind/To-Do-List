import { myProjects, myTasks } from "./create";
import { pubsub } from "./pubsub";
export { addToMyTasks, addToMyProjects, changePriority, changeStatus, deleteTask, updateLists };


const addToMyTasks = (task) => {
    myTasks.push(task);
    pubsub.publish("myTasksUpdated", myTasks);
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
    console.log(myProjects);
    for (const [index, task] of myTasks.entries()) {
        const projects = Object.keys(myProjects);
        task.indexInMyTasks = index;
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
};

const changePriority = (task, newPriority) => {
    task.priority = newPriority;
};
const changeStatus = (task) => {
    if(task.status == "unchecked") task.status = "checked";
};

const deleteTask = (taskIndex) => {
    myTasks.splice(taskIndex, 1);
    pubsub.publish("myProjectsUpdated");
    pubsub.publish("myTasksUpdated", myTasks);
};

const editTask = (taskIndex) => {
    const task = myTasks[taskIndex];

};

pubsub.subscribe("taskDeleted", deleteTask)
pubsub.subscribe("myProjectsUpdated" , updateLists);
pubsub.subscribe("myTasksUpdated" , updateLists);
pubsub.subscribe("taskCreated", addToMyTasks);
pubsub.subscribe("projectCreated", addToMyProjects);
pubsub.subscribe("taskEdited", editTask);
