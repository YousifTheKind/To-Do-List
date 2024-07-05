import { myProjects, myTasks } from "./create";
import { pubsub } from "./pubsub";
export { changePriority, changeStatus, deleteTask, updateLists };

const updateLists = () => {
    // reset all project tasks
    for(const key in myProjects) {
        myProjects[key] = [];
    };
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
    pubsub.publish("ListsUpdated");
    console.log(myTasks);
    console.log(myProjects);
};

const changePriority = (task, newPriority) => {
    task.priority = newPriority;
};
const changeStatus = (task) => {
    if(task.status == "unchecked") task.status = "checked";
};

const deleteTask = (taskIndex) => {
    myTasks.splice(taskIndex, 1);
    pubsub.publish("myTasksUpdated");
};

const editTask = (editedTaskObj, taskIndex) => {
    Object.assign(myTasks[taskIndex], editedTaskObj);
    pubsub.publish("myTasksUpdated");
};

pubsub.subscribe("myProjectsUpdated" , updateLists);
pubsub.subscribe("myTasksUpdated" , updateLists);
pubsub.subscribe("taskEdited", editTask);
pubsub.subscribe("taskDeleted", deleteTask)

