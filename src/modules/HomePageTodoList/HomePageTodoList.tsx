import { AddTodo } from "@/components/AddTodo";
import { TodoList } from "@/components/TodoList";
import { serviceGetAllTodos } from "@/lib/Service/todos";
import variables from "./homePageTodoList.module.scss";

import React, { FC } from "react";

export const HomePageTodoList: FC = async () => {
  // Serverside rendering için ilk data çekilir
  const todoList = await serviceGetAllTodos();

  return (
    <section className={variables.homePageTodoList}>
      <h1 className={variables.title}>ToDo List</h1>

      <AddTodo />

      <TodoList todoList={todoList.todos} />
    </section>
  );
};
