import { Todo } from "@/lib/data";
import { FC } from "react";
import { TodoListItem } from "./TodoListItem";
import variables from "./todoList.module.scss";

export type TodoListProps = {
  todoList: Todo[];
};

export const TodoList: FC<TodoListProps> = ({ todoList }) => {
  return (
    <div className={variables.todoList}>
      {todoList?.map((item) => {
        return <TodoListItem todo={item} key={item.id} />;
      })}
    </div>
  );
};
