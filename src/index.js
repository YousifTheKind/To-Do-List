import './styles.css';
import './pubsub';
import './create.js';
import './listsController';
import { displayProjectList, addProjectsToDropdownList } from './displayController.js';
import { getFromLocalStorage } from './localStorage.js';

// getting data from localStorage if it exists
window.addEventListener('load', getFromLocalStorage);

// loading the project list on the side bar and the dropdown menu on the task form
displayProjectList();
addProjectsToDropdownList();