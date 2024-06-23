import { myProjects, myTasks } from "./create";
export {addToMyTasks, addToMyProjects, changePriority, changeStatus, deleteTask, updateLists};

const addToMyTasks = (task) => {
    myTasks.push(task)
};

const addToMyProjects = (project) => {
    Object.assign(myProjects, project);
};

const updateLists = () => {

};
const changePriority = () => {

};
const changeStatus = () => {

};
const deleteTask = () => {

};
