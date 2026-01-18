const FilterTodos = ({ filters, setFilters }) => {
  return (
    <div className="my-2 px-2 flex flex-wrap items-center justify-center gap-2">
      <button className="px-3 py-1.5 text-sm sm:text-base bg-yellow-200 rounded-xl" onClick={() => setFilters("all")}>ALL</button>
      <button className="px-3 py-1.5 text-sm sm:text-base bg-red-400 rounded-xl" onClick={() => setFilters("pending")}>PENDING</button>
      <button className="px-3 py-1.5 text-sm sm:text-base bg-green-300 rounded-xl" onClick={() => setFilters("completed")}>COMPLETED</button>
    </div>
  );
};

export default FilterTodos;
