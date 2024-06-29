import { pubsub } from "./pubsub";
export { createTask, createProject, myTasks, myProjects };
const myTasks = [];
const myProjects = {};


const createTask = (taskDetails) => {
    const newTask = {
        title: taskDetails[0],
        description: taskDetails[1],
        doDate: taskDetails[2],
        priority: taskDetails[3],
        project: taskDetails[4],
        status: taskDetails[5]
    }
    pubsub.publish("taskCreated", newTask);
};

const createProject = (title) => {
    const newProject = {
        [title]: []
    };
    pubsub.publish("projectCreated", newProject);
};

// delete later
const testTask = {
    title: "test",
    description: "test",
    doDate: "2024-06-12",
    priority: "P1",
    project: "Inbox",
    status: "unchecked"
}
myTasks.push(testTask);


pubsub.subscribe("taskRecived", createTask);
pubsub.subscribe("projectRecived", createProject);