import { Todo, addTodo, getTodos } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const todos = getTodos();
        return NextResponse.json({message: "Ok" , todos}, {
            status: 200
        })
    } catch (err) {
        return NextResponse.json({message: "Error" , err}, {
            status: 500
        })
    }
}
 
 
export const POST = async (req: Request) => {
    const { text } = await req.json();
    try {
        const todo: Todo = {id: Date.now().toString(), completed: false, text, date: new Date()};
        addTodo(todo);
        
        return NextResponse.json({message: "Ok", todo}, {
            status: 201
        })
    } catch (err) {
        return NextResponse.json({message: "Error" , err}, {
            status: 500
        })
    }
}