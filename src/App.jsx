import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import ReadTodo from "./components/ReadTodo";
import FilterTodos from "./components/FilterTodos";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          {
            id: 1,
            task: "10 Pushups",
            isCompleted: false,
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [filters, setFilters] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filters === "completed") return todo.isCompleted;
    else if (filters === "pending") return !todo.isCompleted;
    return true;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-stone-50 via-stone-200 to-stone-50 px-3 py-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-xl p-4 sm:p-6 shadow-lg">
        <h1 className="flex justify-center items-center gap-2 text-2xl font-semibold mb-4">
          <span className="flex items-center justify-center">
            <i className="bx bx-task text-2xl"></i>
          </span>
          To-Do App
        </h1>
        <div>
          <CreateTodo todos={todos} setTodos={setTodos} />
          <FilterTodos filters={filters} setFilters={setFilters} />
          <ReadTodo todos={filteredTodos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
};

export default App;

// fully responsive

// first commit is the original program commit message is "todo app completed"
// second commit "added localStorage persistance" and removed scrollbar
