import './styles.css';
import { createTask, createProject, myTasks, myProjects } from './create.js';
import { addToMyTasks, addToMyProjects, updateLists, changePriority } from './listsController';
import { compareAsc, format } from "date-fns";
import { showForms } from './displayController.js';

showForms();
//default project
const Inbox = createProject("Inbox");
addToMyProjects(Inbox);

//Demo
const title = "some task";
const description = "some description";
const doDate = "some date";
const priority = "urgent";
const projectName = "some project";
const status = "unchecked";
const newTask = createTask(title, description, doDate, priority, projectName, status);
const anotherTask = createTask("some other task", description, doDate, priority, "Inbox", status);
const newProject = createProject(projectName);
addToMyTasks(newTask);
addToMyTasks(anotherTask);
addToMyProjects(newProject);

updateLists();
console.log( myTasks);
console.log( myProjects);