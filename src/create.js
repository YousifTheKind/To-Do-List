export {createTodo, createProject, myTodos, myProjects};

const [myTodos, myProjects] = [[], []];

const createTodo = (title, description, doDate, priority, project, status) => {
    return {title, description, doDate, priority, project, status}
};

const createProject = (title) => {
    return {
        title,
        tasks: []
    };
};