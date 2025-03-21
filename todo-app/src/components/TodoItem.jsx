import React, { useState } from "react";
import { useTheme } from "../contexts";

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const { updateTodo, deleteTodo, toggleComplete } = useTheme();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div>
      <input type="checkbox" name="checkbox" id="checkbox" />
      <input type="text" />
    </div>
  );
}

export default TodoItem;
