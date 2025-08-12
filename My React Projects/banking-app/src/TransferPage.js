function TransferPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold text-blue-300 mb-6">Transfer Money Between Account</h1>

      <div className="space-y-6 max-w-md">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">From Account</label>
          <input
            type="number"
            name="number"
            placeholder="Enter your account number"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">To Account</label>
          <input
            type="number"
            name="number"
            placeholder="Enter your receiver account number"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-300">Amount</label>
          <input
            type="number"
            name="number"
            placeholder="Enter amount you want to send"
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransferPage;