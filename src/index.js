import './styles.css';
import { pubsub } from "./pubsub";
import { createTask, createProject, myTasks, myProjects } from './create.js';
import { addToMyTasks, addToMyProjects, updateLists, changePriority } from './listsController';
import { displayProjectList, addProjectsToDropdownList } from './displayController.js';
import { getFromLocalStorage } from './localStorage.js';



window.addEventListener('load', getFromLocalStorage);
displayProjectList();
addProjectsToDropdownList();

//default project
// createProject("Inbox");

//delete
// createTask("test", "test", "2024-07-09", "P1", "Inbox");
// createTask("not test", "not test", "2024-07-09", "P1", "Inbox");