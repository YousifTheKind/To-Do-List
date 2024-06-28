import './styles.css';
import { pubsub } from "./pubsub";
import { createTask, createProject, myTasks, myProjects } from './create.js';
import { addToMyTasks, addToMyProjects, updateLists, changePriority } from './listsController';
import { compareAsc, format } from "date-fns";
import { showFormClickListener, taskDetails } from './displayController.js';


//click listener for add task/project buttons
showFormClickListener();

//default project
const Inbox = createProject("Inbox");
addToMyProjects(Inbox);


updateLists();
console.log( myTasks);
console.log( myProjects);