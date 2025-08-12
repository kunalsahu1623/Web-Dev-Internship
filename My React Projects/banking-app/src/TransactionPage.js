function TransactionPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold text-blue-300 mb-6">Recent Transactions</h1>

      <table className="w-full table-auto border-collapse bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-700 text-blue-300">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">From</th>
            <th className="px-4 py-2 text-left">To</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-600 hover:bg-gray-700">
            <td className="px-4 py-2">2025-08-11</td>
            <td className="px-4 py-2">974386XXXX</td>
            <td className="px-4 py-2">987654XXXX</td>
            <td className="px-4 py-2">₹100</td>
            <td className="px-4 py-2 text-green-400 font-semibold">Success</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TransactionPage;