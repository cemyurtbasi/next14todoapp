import { AddTodo } from "@/components/AddTodo.tsx";
import { TodoList } from "@/components/TodoList";
import { serviceGetAllTodos } from "@/lib/Service/todos";
// import { getAllTodos } from "@/lib/Service/todos";
import React, { FC } from "react";

export const HomePageTodoList: FC = async () => {
  // Serverside rendering için ilk data çekilir
  const todoList = await serviceGetAllTodos();

  return (
    <section>
      <div className="div">
        <h1>ToDo List</h1>

        <div className="div">
          <AddTodo />
        </div>

        <div className="div">
          <TodoList todoList={todoList.todos} />
        </div>
      </div>
    </section>
  );
};
