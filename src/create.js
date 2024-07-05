import { pubsub } from "./pubsub";
export { createTask, createProject, myTasks, myProjects };

// initialize tasks array and projects object
// myTasks is an array of objects, each object is a task
// myProjects is an object, each project is an object property that holds an array
// Inbox is already added as the default project 
const myTasks = [];
const myProjects = {
    "Inbox": [],
};

// create the task object with the data passed in
const createTask = (title, description, date, priority, project) => {
    const newTask = {
        title,
        description,
        date,
        priority,
        project,
    };

    // push the new task to myTasks
    myTasks.push(newTask);

    // inform pubsub that myTasks was updated
    pubsub.publish("myTasksUpdated");
};

// create an object based on the title and init to empty array
const createProject = (title) => {
    const newProject = {
        [title]: []
    };

    // assign the new project to myProjects
    Object.assign(myProjects, newProject);

    // inform pubsub that we have updated myProjects
    pubsub.publish("myProjectsUpdated");
};

// createTask and createProject are listening for when a data is received and or a data project is received
pubsub.subscribe("taskRecived", createTask);
pubsub.subscribe("projectRecived", createProject);