export { createTask, createProject, myTasks, myProjects };
const myTasks = [];
const myProjects = {};

const createTask = (taskDetails) => {
    return {
        title: taskDetails[0],
        description: taskDetails[1],
        doDate: taskDetails[2],
        priority: taskDetails[3],
        project: taskDetails[4],
        status: taskDetails[5],
    };
};

const createProject = (title) => {
    return {
        [title]: []
    };
};