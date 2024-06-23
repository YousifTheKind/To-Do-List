import {createTask, createProject, myTasks, myProjects} from './create.js';
import {addToMyTasks, addToMyProjects, updateLists} from './listsController';

const title = "some task";
const description = "some description";
const doDate = "some date";
const priority = "urgent";
const projectName = "some project";
const status = "unchecked";

const newTask = createTask(title, description, doDate, priority, projectName, status);

const newProject = createProject(projectName);
const anotherProject = createProject("some other project");

addToMyTasks(newTask);

addToMyProjects(newProject);
addToMyProjects(anotherProject);

updateLists()
console.log("my tasks: " + myTasks);
console.log( myProjects);