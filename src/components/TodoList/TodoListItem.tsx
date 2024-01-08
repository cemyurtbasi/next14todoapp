"use client";

import { Todo } from "@/lib/data";
import { FC, useCallback } from "react";
import { Checkbox } from "../formElements/Checkbox";
import {
  serviceGetAllTodos,
  serviceRemoveTodo,
  serviceUpdateTodo,
} from "@/lib/Service/todos";
import { Button, ButtonTypes } from "../formElements/Button";

import { useDispatch } from "react-redux";
import { setTodoList, removeTodo } from "@/lib/Redux/Features/todos/todosSlice";
import Image from "next/image";

import variables from "./todoList.module.scss";
import { cx } from "@/shared/utlis/concatClasses";

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
    <div className={variables.todoListItem}>
      <Checkbox checked={completed} onChange={onChangeControl} />

      <span className={cx(variables.text, completed && variables.checked)}>
        {text}
      </span>

      <Button
        onClick={onDeleteControl}
        customClass={variables.button}
        type={ButtonTypes.secondary}
      >
        <Image
          src="/images/trash-icon.svg"
          alt="unchecked"
          width="20"
          height="20"
        />
      </Button>
    </div>
  );
};
