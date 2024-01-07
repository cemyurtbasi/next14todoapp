import { deleteTodo, getTodoById, updateTodo } from "@/lib/data";
import { NextResponse } from "next/server";

export const DELETE = async(req: Request) => {
    const id = req.url.split("todos/")[1];
    try {
        const todo = getTodoById(id);
        if(!todo)
            return NextResponse.json({message: "Error"}, {
                status: 404
            })

        deleteTodo(id);
        return NextResponse.json({message: "Ok"}, {
            status: 201
        })
    } catch (err) {
        return NextResponse.json({message: "Error" , err}, {
            status: 500
        })
    }
}

export const PUT = async(req: Request) => {
    const id = req.url.split("todos/")[1];
    const { checked } = await req.json();
    try {
        const todo = getTodoById(id);
        if(!todo)
            return NextResponse.json({message: "Error"}, {
                status: 404
            })
            
        const updatedTodo = updateTodo(id, checked);
        return NextResponse.json({message: "Ok", todo: updatedTodo}, {
            status: 201
        })
    } catch (err) {
        return NextResponse.json({message: "Error" , err}, {
            status: 500
        })
    }
}
