import { useState } from "react";

function AddTodoPage() {
    const [form, setForm] = useState({
        title: "",
        dueDate: "",
        status: ""
    });

    function handleChange(e) {
        // will update state here

        let inputTagName = e.target.name; // here we are taking input name
        let inputTagValue = e.target.value; // here we are taking input value

        setForm(previousForm => ({
            ...previousForm,
            [inputTagName]: inputTagValue
        }));
    };

    function handleSubmit(e) {
        alert(`Form Submitted \n Your Tile is ${form.title} \n Your DueDate is ${form.dueDate} \n Your Status is ${form.status}`)
    };
    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md space-y-6"
        >
            <div>
                <label className="block mb-1 font-semibold">Todo Title:</label>
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={(e) => handleChange(e)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div>
                <label className="block mb-1 font-semibold">Due Date:</label>
                <input
                    type="date"
                    name="dueDate"
                    value={form.dueDate}
                    onChange={(e) => handleChange(e)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
            </div>
            <div>
                <label className="block mb-1 font-semibold">Status:</label>
                <select
                    name="status"
                    value={form.status}
                    onChange={(e) => handleChange(e)}
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="">Select status</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
            >
                Submit
            </button>
        </form>
    );
}

export default AddTodoPage