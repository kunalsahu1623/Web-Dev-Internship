function ShowTodoPage(props) {
    let todoArr = props.todo;

    function handleClick(e, todoId) {
        
        let newTodoArr = []

        for (let i = 0; i < todoArr.length; i++) {
            newTodoArr[i] = todoArr[i]

            if (todoArr[i].id === todoId) {
                console.log("here2")
                newTodoArr[i].status = "completed";
                newTodoArr[i].completedDate = new Date()
                console.log(JSON.stringify(newTodoArr[i]))
            }
        }

        props.setTodo(newTodoArr);
    }

    return (
        <div class="bg-purple-200 min-h-[200px] flex justify-center items-center py-6">
            <table class="table-auto border border-black bg-white shadow-lg rounded-lg overflow-hidden">
                <thead class="bg-purple-400 text-white">
                    <tr>
                        <th class="border px-6 py-3 text-lg">Todo Title</th>
                        <th class="border px-6 py-3 text-lg">Due Date</th>
                        <th class="border px-6 py-3 text-lg">Mark Done</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoArr.filter(value => value.status === "pending").length === 0 ? (
                            <tr>
                                <td colSpan={3} class="text-center py-6 text-gray-500">
                                    No pending todos left.
                                </td>
                            </tr>
                        ) : (
                            todoArr.map((value, index) => (
                                value.status === "pending" && (
                                <tr class="hover:bg-purple-100 transition">
                                    <td class="border px-4 py-2 text-center">{value.todoTitle}</td>
                                    <td class="border px-4 py-2 text-center">{value.dueDate}</td>
                                    <td class="border px-4 py-2 text-center">
                                        <button
                                            onClick={(e) => handleClick(e, value.id)}
                                            class="text-green-600 hover:text-green-800 text-xl transition"
                                        >
                                            ✅
                                        </button>
                                    </td>
                                </tr>
                                )
                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowTodoPage;