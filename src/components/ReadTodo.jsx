import { useState } from "react";
import Completed from "./Completed";
import DeleteTodo from "./DeleteTodo";

const ReadTodo = ({ todos, setTodos }) => {
  const [editingId, setEditingId] = useState(null);
  const [editingTask, setEditingTask] = useState("");

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setEditingTask(todo.task);
  };

  const handleSave = (id) => {
    if (!editingTask.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task: editingTask } : todo,
      ),
    );
    setEditingId("null");
    // setEditingTask("");
  };

  return (
    <div className="mt-2 p-2 rounded-xl">
      <div className="">
        <ol>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-2 justify-between min-h-[40px]"
            >
              <Completed id={todo.id} todos={todos} setTodos={setTodos} />
              {editingId === todo.id ? (
                <input
                  className="border p-1 w-full max-w-[180px] mx-1"
                  value={editingTask}
                  onChange={(e) => setEditingTask(e.target.value)}
                  type="text"
                />
              ) : (
                <span
                  className={`flex-1 mx-2 ${todo.isCompleted ? "line-through text-green-600" : ""}`}
                >
                  {todo.task}
                </span>
              )}
              <span className="flex gap-2">
                {editingId === todo.id ? (
                  <button
                    className="text-green-600"
                    onClick={() => handleSave(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="text-blue-600"
                    onClick={() => handleEdit(todo)}
                  >
                    Edit
                  </button>
                )}
                <DeleteTodo id={todo.id} todos={todos} setTodos={setTodos} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ReadTodo;
