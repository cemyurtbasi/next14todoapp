"use client";

import React, { FC, useState, useCallback } from "react";
import { Input } from "../formElements/Input";
import { Button, ButtonTypes } from "../formElements/Button";
import { serviceAddTodo } from "@/lib/Service/todos";
import { useDispatch } from "react-redux";
import { addTodo } from "@/lib/Redux/Features/todos/todosSlice";

import variables from "./addTodo.module.scss";

export const AddTodo: FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = useCallback((value: string) => {
    setTaskName(value);
  }, []);

  const onAddTodo = useCallback(() => {
    if (!taskName) return;

    serviceAddTodo(taskName).then((res) => {
      if (!res.ok) return;

      dispatch(addTodo(res.todo));
      setTaskName("");
    });
  }, [taskName]);

  return (
    <div className={variables.addTodo}>
      <Input
        value={taskName}
        customClass={variables.input}
        onChange={handleChange}
        placeHolder="New Task"
      />
      <Button
        text="Add"
        type={ButtonTypes.primary}
        customClass={variables.addButton}
        onClick={onAddTodo}
      />
    </div>
  );
};
