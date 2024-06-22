import {createTask, createProject, myTasks, myProjects} from './create'

const title = "some task";
const description = "some description";
const doDate = "some date";
const priority = "urgent";
const projectName = "some project";
const status = "unchecked";

const newTodo = createTask(title, description, doDate, priority, projectName, status);

const newProject = createProject(projectName)

console.log(newTodo);
console.log(newProject);