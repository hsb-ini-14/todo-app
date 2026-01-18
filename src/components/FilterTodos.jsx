const FilterTodos = ({ filters, setFilters }) => {
  return (
    <div className="my-2 px-2 flex items-center justify-center gap-5">
      <button className="px-4 py-2 text-xl bg-yellow-200 rounded-xl" onClick={() => setFilters("all")}>ALL</button>
      <button className="px-4 py-2 text-xl bg-red-400 rounded-xl" onClick={() => setFilters("pending")}>PENDING</button>
      <button className="px-4 py-2 text-xl bg-green-300 rounded-xl" onClick={() => setFilters("completed")}>COMPLETED</button>
    </div>
  );
};

export default FilterTodos;
