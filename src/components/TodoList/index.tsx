import { Todo } from "@/lib/data";
import { FC } from "react";
import { TodoListItem } from "./TodoListItem";

export type TodoListProps = {
  todoList: Todo[];
};

export const TodoList: FC<TodoListProps> = ({ todoList }) => {
  return (
    <div>
      {todoList?.map((item) => {
        return <TodoListItem todo={item} key={item.id} />;
      })}
    </div>
  );
};
