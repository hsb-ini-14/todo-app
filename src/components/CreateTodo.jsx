import { nanoid } from "nanoid";
import { useState } from "react";

const CreateTodo = ({ todos, setTodos }) => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    const trimmedTask = task.trim();

    if (!trimmedTask) {
      setError("Task cannot be empty.");
      return;
    }

    const newTodo = {
      id: nanoid(),
      task,
      isCompleted: false,
    };

    setTodos([...todos, newTodo]);

    setTask("");
    setError("");
  };

  return (
    <div className="p-2 rounded-md">
      <div className="flex gap-2 flex-col sm:flex-row">
        <input
          className="border rounded-md px-3 py-2 flex-1"
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 rounded-xl font-medium bg-blue-400 w-full sm:w-auto"
        >
          ADD
        </button>
      </div>
      <div className="min-h-[20px] mt-1">
        {error && (
          <small className="block text-red-500 font-bold">{error}</small>
        )}
      </div>
    </div>
  );
};

export default CreateTodo;
