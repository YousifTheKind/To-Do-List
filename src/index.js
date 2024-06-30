import './styles.css';
import { pubsub } from "./pubsub";
import { createTask, createProject, myTasks, myProjects } from './create.js';
import { addToMyTasks, addToMyProjects, updateLists, changePriority } from './listsController';
import { compareAsc, format } from "date-fns";
import { showFormClickListener, displayTasks, displayProjectList } from './displayController.js';


//click listener for add task/project buttons
showFormClickListener();

//default project
createProject("Inbox");

updateLists();