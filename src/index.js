import { createTask, createProject, myTasks, myProjects } from './create.js';
import { addToMyTasks, addToMyProjects, updateLists } from './listsController';

const title = "some task";
const description = "some description";
const doDate = "some date";
const priority = "urgent";
const projectName = "some project";
const status = "unchecked";

//Demo
const newTask = createTask(title, description, doDate, priority, projectName, status);
const anotherTask = createTask("some other task", description, doDate, priority, "some other project", status);
const newProject = createProject(projectName);
const anotherProject = createProject("some other project");
addToMyTasks(newTask);
addToMyTasks(anotherTask);
addToMyProjects(newProject);
addToMyProjects(anotherProject);

updateLists();
console.log( myTasks);
console.log( myProjects);