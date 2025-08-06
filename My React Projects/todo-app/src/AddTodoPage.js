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
    e.preventDefault(); // prevent page refresh
    alert("Form submitted, data = " + JSON.stringify(formData));

    //update state 
    setTodo(previousTodos => ([
      ...previousTodos,
      {
        "id": Date.now(),
        "todoTitle": formData.todoTitle,
        "dueDate": formData.dueDate,
        "status": formData.status,
        "completeDate": "",
      }
    ]));
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-pink-300 flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-pink-700">Add New Todo</h2>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Todo Title</label>
          <input
            type="text"
            placeholder="Enter your todo title"
            name="todoTitle"
            value={formData.todoTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-700">Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="bg-pink-500 text-white w-full py-2 rounded-md hover:bg-pink-600 transition duration-200 font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodoPage;