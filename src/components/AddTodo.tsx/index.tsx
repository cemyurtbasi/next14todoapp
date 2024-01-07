"use client";

import React, { FC, useState, useCallback } from "react";
import { Input } from "../formElements/Input";
import { Button } from "../formElements/Button";
import { serviceAddTodo } from "@/lib/Service/todos";
import { useDispatch } from "react-redux";
import { addTodo } from "@/lib/Redux/Features/todos/todosSlice";

export const AddTodo: FC = () => {
  const [taskName, setTaskName] = useState<string>("");
  const dispatch = useDispatch();

  const handleChange = useCallback((value: string) => {
    setTaskName(value);
  }, []);

  const onAddTodo = useCallback(() => {
    serviceAddTodo(taskName).then((res) => {
      if (!res.ok) return;

      dispatch(addTodo(res.todo));
      setTaskName("");
    });
  }, [taskName]);

  return (
    <div>
      <Input value={taskName} onChange={handleChange} placeHolder="New Task" />
      <Button text="Add" onClick={onAddTodo} />
    </div>
  );
};
