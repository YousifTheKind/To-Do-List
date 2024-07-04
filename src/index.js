import './styles.css';
import { pubsub } from "./pubsub";
import { createTask, createProject, myTasks, myProjects } from './create.js';
import { addToMyTasks, addToMyProjects, updateLists, changePriority } from './listsController';
import { displayTasks } from './displayController.js'


//click listener for add task/project buttons
// showFormClickListener();


//default project
createProject("Inbox");

//delete
const details = [];
createTask("test", "test", "2024-07-09", "P1", "Inbox");
createTask("not test", "not test", "2024-07-09", "P1", "Inbox");