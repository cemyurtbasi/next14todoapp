"use client";

import React, { FC, useState, useCallback } from "react";
import { Input } from "../formElements/Input";
import { Button } from "../formElements/Button";

export const AddTodo: FC = () => {
  const [taskName, setTaskName] = useState<string>("");

  const handleChange = useCallback((value: string) => {
    setTaskName(value);
  }, []);

  const onAddTodo = () => {
    console.log(taskName);

    //API'ye git ekle
    //Geri gel setTaskName sıfırla
    //Todolist'i yeniden çek
  };

  return (
    <div>
      <Input value={taskName} onChange={handleChange} placeHolder="New Task" />
      <Button text="Add" onClick={onAddTodo} />
    </div>
  );
};
