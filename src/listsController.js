import { myProjects, myTasks } from "./create";
import { pubsub } from "./pubsub";

// update myTasks and myProjects
const updateLists = () => {
    // for each project, reset all project tasks
    for(const key in myProjects) {
        myProjects[key] = [];
    };
    // for each task in myTasks
    for (const [index, task] of myTasks.entries()) {

        // get an array of project names
        const projects = Object.keys(myProjects);

        // set the index of the task to property, to be used later to delete the task and edit
        task.indexInMyTasks = index;

        // if the task belongs to a project that exists in myProjects
        if (projects.includes(task.project)) {

            // get the project name
            let projectMatch = projects.find(title => title == task.project);

            // push the task to that project
            myProjects[projectMatch].push(task);
        }
        // if the project got deleted
        else {
            deleteTask(task.indexInMyTasks);
        };
    };
    // let all components that are subscribed to "listsUpdated" know that myProjects and myTasks are updated
    pubsub.publish("listsUpdated");
};

// delete the task based on index
const deleteTask = (taskIndex) => {
    myTasks.splice(taskIndex, 1);

    // let all components that are subscribed to "myTasksUpdated" know that myTasks is updated 
    pubsub.publish("myTasksUpdated");
};

// delete a project based on its name
const deleteProject = (name) => {
    delete myProjects[name];
    
    // let all components that are subscribed to "myProjectsUpdated" know that myProjects is updated 
    pubsub.publish("myProjectsUpdated");
};

// edit task using the edited task and the original task's index
const editTask = (editedTaskObj, taskIndex) => {
    Object.assign(myTasks[taskIndex], editedTaskObj);

    // let all components that are subscribed to "myTasksUpdated" know that myTasks is updated 
    pubsub.publish("myTasksUpdated");
};

// updateLists is called when myProjectsUpdated & myTasksUpdated are published
pubsub.subscribe("myProjectsUpdated" , updateLists);
pubsub.subscribe("myTasksUpdated" , updateLists);

// editTask is called when taskEdited is published
pubsub.subscribe("taskEdited", editTask);

// deleteTask is called when taskDeleted is published
pubsub.subscribe("taskDeleted", deleteTask);

// deleteProject is called when projectDeleted is published
pubsub.subscribe("projectDeleted", deleteProject);

