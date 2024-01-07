export type Todo = {
    id: string
    completed: boolean
    text: string
}

// Ram database <3
let todos: Todo[] = [{
    id: "1",
    completed: false,
    text: "1",
}, 
{
    id: "2",
    completed: false,
    text: "2",
}];

export const getTodos = () => {
    return todos
}

export const getTodoById = (id: string) => {
    const todo = todos.find((todo) => todo.id === id);
    if(!todo) throw new Error("No todo found");

    return todo;
}

export const addTodo = (todo: Todo) => {
    todos.push(todo);
}

export const deleteTodo = (id: string) => {
    todos = todos.filter((todo) => todo.id !== id);
}

export const updateTodo = (id: string, checked: boolean) => {
    const todo = todos.find((todo) => todo.id === id);
    if(!todo) throw new Error("No todo found");
    
    todo.completed = checked
    return todo;
}