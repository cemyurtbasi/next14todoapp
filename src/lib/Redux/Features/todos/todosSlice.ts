'use client';

import { Todo } from "@/lib/data";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Todo[] = [{
    id: "1",
    completed: false,
    text: "1",
}, 
{
    id: "2",
    completed: false,
    text: "2",
}];

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setTodoList: (state, action) => {state = action.payload},
        removeTodo: (state, action) => {state = state.filter((id) => id !== action.payload)},
        addTodo: (state, action) => {state = [...state, action.payload]},
    }
})

export const {setTodoList, addTodo, removeTodo} = todosSlice.actions;

export default todosSlice.reducer;