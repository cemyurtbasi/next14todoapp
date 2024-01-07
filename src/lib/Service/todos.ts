import { Todo } from "../data";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function serviceGetAllTodos() {
    const response = await baseGetService("todos")
    if(!response.ok)
        throw new Error('failed to fetch list')

    return response;
}
export const getAllTodos = async (): Promise<Todo[]> => {
    const res = await fetch(`${baseUrl}/tasks`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
  }

export async function serviceAddTodo(text: string) {
    const response = await basePostService("todos", {text})
    if(!response.ok)
        throw new Error('failed to add todo')

    return response;
}

export async function serviceRemoveTodo(id: string) {
    const response = await basePostService(`todos/${id}`, {}, "delete")
    if(!response.ok)
        throw new Error('failed to remove todo')

    return response;
}

export async function serviceUpdateTodo(id: string, checked: boolean) {
    const response = await basePostService(`todos/${id}`, {checked}, "PUT")
    if(!response.ok)
        throw new Error('failed to update todo')

    return response;
}


async function baseGetService(shema: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${shema}`, {
      method: "GET", 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer",  
    });

    return response.json(); 
}

async function basePostService(shema: string, data = {}, method = "POST") {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${shema}`, {
      method, 
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", 
      referrerPolicy: "no-referrer",  
      body: JSON.stringify(data)
    });

    return response.json(); 
}