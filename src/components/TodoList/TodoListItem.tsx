"use client";

import { Todo } from "@/lib/data";
import { FC, useCallback } from "react";
import { Checkbox } from "../formElements/Checkbox";
import {
  serviceGetAllTodos,
  serviceRemoveTodo,
  serviceUpdateTodo,
} from "@/lib/Service/todos";
import { Button } from "../formElements/Button";

import { useDispatch } from "react-redux";
import { setTodoList, removeTodo } from "@/lib/Redux/Features/todos/todosSlice";

export type TodoListProps = {
  todo: Todo;
};

export const TodoListItem: FC<TodoListProps> = ({
  todo: { completed, id, text },
}) => {
  const dispatch = useDispatch();

  const onChangeControl = useCallback((value: boolean) => {
    serviceUpdateTodo(id, value).then((res) => {
      if (!res.ok) return;

      serviceGetAllTodos().then((res) => {
        if (!res.ok) return;

        dispatch(setTodoList(res.todos));
      });
    });
  }, []);

  const onDeleteControl = useCallback(() => {
    serviceRemoveTodo(id).then((res) => {
      if (!res.ok) return;
      dispatch(removeTodo(id));
    });
  }, [id]);

  return (
    <div>
      <Checkbox checked={completed} onChange={onChangeControl} />

      <span>{text}</span>

      <Button onClick={onDeleteControl}>ÇÖP</Button>
    </div>
  );
};
