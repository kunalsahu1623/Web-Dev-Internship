function DoneToDoPage(props) {
  const todoArr = props.todo;

  return (
    <div className="bg-green-50 min-h-[300px] flex flex-col items-center py-8">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Completed Todo List</h2>
      <div className="w-full max-w-3xl">
        <table className="min-w-full table-auto border border-green-300 bg-white shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-green-200 text-green-900">
            <tr>
              <th className="px-6 py-3 border-b text-left font-semibold">Todo Title</th>
              <th className="px-6 py-3 border-b text-left font-semibold">Status</th>
              <th className="px-6 py-3 border-b text-left font-semibold">Completed On</th>
            </tr>
          </thead>
          <tbody>
            {todoArr.filter(todo => todo.status === "completed").length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-500">
                  No completed todos yet.
                </td>
              </tr>
            ) : (
              todoArr
                .filter(todo => todo.status === "completed")
                .map(todo => (
                  <tr key={todo.id} className="hover:bg-green-100 transition">
                    <td className="border px-4 py-2">{todo.todoTitle}</td>
                    <td className="border px-4 py-2 capitalize">{todo.status}</td>
                    <td className="border px-4 py-2">
                      {todo.completedDate
                        ? new Date(todo.completedDate).toLocaleDateString()
                        : "-"}
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DoneToDoPage;