import React from "react";
import { IoMdTrash } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { resetTodo } from "@/store/todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const { todosArray, cart, user } = useSelector((state) => state?.todo);

  console.log(todosArray.length);

  return (
    <>
      {todosArray?.length > 0 && (
        <div className="mt-5 border border-black/80 max-w-xl p-5 rounded-md">
          <div>
            {todosArray?.map((item) => (
              <p
                key={item?.todo}
                className="bg-gray-950 mb-2 text-white py-2 px-4 rounded-md flex items-center justify-between"
              >
                {item?.todo}
                <span>
                  <IoMdTrash />
                </span>
              </p>
            ))}
          </div>
          <Button onClick={() => dispatch(resetTodo())} variant="destructive">
            Reset todo
          </Button>
        </div>
      )}
    </>
  );
};

export default TodoList;
