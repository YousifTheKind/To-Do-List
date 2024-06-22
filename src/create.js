export {createTask, createProject, myTasks, myProjects};

const [myTasks, myProjects] = [[], []];

const createTask = (title, description, doDate, priority, project, status) => {
    return {title, description, doDate, priority, project, status}
};

const createProject = (title) => {
    return {
        title,
        tasks: []
    };
};