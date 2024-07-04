import { pubsub } from "./pubsub";
export { createTask, createProject, myTasks, myProjects };
const myTasks = [];
const myProjects = {};


const createTask = (title, description, date, priority, project) => {
    const newTask = {
        title,
        description,
        date,
        priority,
        project,
    };

    myTasks.push(newTask);
    pubsub.publish("myTasksUpdated", myTasks);
};

const createProject = (title) => {
    const newProject = {
        [title]: []
    };

    Object.assign(myProjects, newProject);
    pubsub.publish("myProjectsUpdated", myProjects);
};

pubsub.subscribe("taskRecived", createTask);
pubsub.subscribe("projectRecived", createProject);