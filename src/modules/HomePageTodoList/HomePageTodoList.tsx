import { AddTodo } from "@/components/AddTodo.tsx";
import { TodoList } from "@/components/TodoList";
import React, { FC } from "react";

export const HomePageTodoList: FC = () => {
  return (
    <section>
      <div className="div">
        <h1>ToDo List</h1>

        <div className="div">
          <AddTodo />
        </div>

        <div className="div">
          <TodoList />
        </div>
      </div>
    </section>
  );
};
