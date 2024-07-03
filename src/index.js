import './styles.css';
import { pubsub } from "./pubsub";
import { createTask, createProject, myTasks, myProjects } from './create.js';
import { addToMyTasks, addToMyProjects, updateLists, changePriority } from './listsController';
import { compareAsc, format } from "date-fns";
import { displayTasks, displayProjectList } from './displayController.js';


//click listener for add task/project buttons
// showFormClickListener();


//default project
createProject("Inbox");

//delete
const details = ["test", "test", "test", "P1", "Inbox", "unchecked"];
createTask(details);