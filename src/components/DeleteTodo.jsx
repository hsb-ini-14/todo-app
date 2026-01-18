const DeleteTodo = ({ id, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <button className="text-red-600" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteTodo;
