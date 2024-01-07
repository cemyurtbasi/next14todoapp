import { deleteTodo, getTodoById, updateTodo } from "@/lib/data";
import { NextResponse } from "next/server";

export const DELETE = async(req: Request) => {
    const id = req.url.split("todos/")[1];
    try {
        const todo = getTodoById(id);
        if(!todo)
            return NextResponse.json({ok: false}, {
                status: 404
            })

        deleteTodo(id);
        return NextResponse.json({ok: true}, {
            status: 201
        })
    } catch (err) {
        return NextResponse.json({ok: false , err}, {
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
            return NextResponse.json({ok: false}, {
                status: 404
            })
            
        const updatedTodo = updateTodo(id, checked);
        return NextResponse.json({ok: true, todo: updatedTodo}, {
            status: 201
        })
    } catch (err) {
        return NextResponse.json({ok: false , err}, {
            status: 500
        })
    }
}
