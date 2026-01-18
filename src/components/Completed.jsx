const Completed = ({ id, todos, setTodos }) => {
  const currentTodo = todos.find((todo) => todo.id === id);

  const handleCompleted = (e) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: e.target.checked } : todo,
      ),
    );
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleCompleted}
        checked={currentTodo?.isCompleted}
      />
    </div>
  );
};

export default Completed;
