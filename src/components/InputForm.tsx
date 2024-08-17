"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { addTodo } from "@/store/todoSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");

  const [todos, setTodos] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTodo({ todo: todo }));
    setTodo("");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl flex items-center gap-x-3 mt-5"
      >
        <div className="flex-1 relative">
          <Input
            className="w-full pr-8"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          {todo && (
            <IoCloseSharp
              onClick={() => setTodo("")}
              className="absolute top-3 right-2 text-lg hover:text-red-500 duration-200 cursor-pointer"
            />
          )}
        </div>

        <Button type="submit">Submit</Button>
      </form>
      <TodoList />
    </div>
  );
};

export default InputForm;
