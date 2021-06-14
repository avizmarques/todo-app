import cn from "classnames";

export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex text-sm">
      <button
        className={cn(
          "mr-2 hover:font-black hover:text-gray-800 focus:outline-none dark:hover:text-white",
          filter === "all" && "font-black text-gray-800 dark:text-blue"
        )}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={cn(
          "mr-2 hover:font-black hover:text-gray-800 focus:outline-none dark:hover:text-white",
          filter === "active" && "font-black text-gray-800 dark:text-blue"
        )}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={cn(
          "hover:font-black hover:text-gray-800 focus:outline-none dark:hover:text-white",
          filter === "completed" && "font-black text-gray-800 dark:text-blue"
        )}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
