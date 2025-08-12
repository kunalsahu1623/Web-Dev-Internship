import { useState } from 'react';

function AddTodoPage(props) {
  let setTodo = props.setTodo;

  let [formData, setFormData] = useState({
    todoTitle: '',
    dueDate: '',
    status: 'pending'
  });

  function handleChange(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    setFormData(prev => ({
      ...prev,
      [inputName]: inputValue
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted, data = " + JSON.stringify(formData));

    setTodo(previousTodos => ([
      ...previousTodos,
      {
        id: Date.now(),
        todoTitle: formData.todoTitle,
        dueDate: formData.dueDate,
        status: formData.status,
        completeDate: "",
      }
    ]));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-200 to-rose-300 flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto mt-10 p-10 bg-white rounded-3xl shadow-2xl space-y-8 border border-pink-200"
      >
        <h2 className="text-3xl font-extrabold text-center text-pink-600 tracking-wide">✨ Add New Todo ✨</h2>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Todo Title</label>
          <input
            type="text"
            placeholder="Enter your todo title"
            name="todoTitle"
            value={formData.todoTitle}
            onChange={handleChange}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200 shadow-sm"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-200 shadow-sm"
          />
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white w-full py-3 rounded-lg hover:from-pink-600 hover:to-rose-600 transition duration-300 font-semibold shadow-md"
        >
          ➕ Submit Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoPage;