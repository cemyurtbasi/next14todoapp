export type Todo = {
    id: string
    completed: boolean
    text: string
    date: Date;
}

let todos: Todo[] = [];

export const getTodos = () => {
    return todos
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
}