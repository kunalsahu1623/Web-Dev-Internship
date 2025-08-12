function Loginpage() {
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <form className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-blue-300 mb-6 text-center">Login To Your Bank Account</h1>

                <div className="mb-4">
                    <label className="block text-sm font-medium text-blue-300 mb-1">Mobile Number</label>
                    <input
                        type="number"
                        name="Number"
                        placeholder="Enter Your Mobile Number..."
                        className="w-full px-5 py-3 bg-gray-900 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-blue-300 mb-1">Password</label>
                    <input
                        type="password"
                        name="Number"
                        placeholder="Enter Your Password..."
                        className="w-full px-5 py-3 bg-gray-900 text-white border border-blue-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 shadow-sm [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Loginpage;