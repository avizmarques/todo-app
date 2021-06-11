export default function FilterBar() {
  return (
    <div className="flex text-sm">
      <div className="mr-2 hover:font-black hover:text-gray-800">All</div>
      <div className="mr-2 hover:font-black hover:text-gray-800">Active</div>
      <div className="hover:font-black hover:text-gray-800">Completed</div>
    </div>
  );
}
