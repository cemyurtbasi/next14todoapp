import { Todo, addTodo, getTodos } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const todos = getTodos() as Todo[];
        return NextResponse.json({ok: true , todos}, {
            status: 200
        })
    } catch (err) {
        return NextResponse.json({ok: false , err}, {
            status: 500
        })
    }
}
 
 
export const POST = async (req: Request) => {
    const { text } = await req.json();
    try {
        const todo: Todo = {id: Date.now().toString(), completed: false, text};
        addTodo(todo);
        
        return NextResponse.json({ok: true, todo}, {
            status: 201
        })
    } catch (err) {
        return NextResponse.json({ok: false , err}, {
            status: 500
        })
    }
}