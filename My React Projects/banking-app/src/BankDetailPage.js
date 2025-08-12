function BankDetailPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold text-blue-300 mb-6">Your Account Detail</h1>

      <table className="w-full table-auto border-collapse bg-gray-800 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-700 text-blue-300">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Number</th>
            <th className="px-4 py-2 text-left">Branch</th>
            <th className="px-4 py-2 text-left">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-600 hover:bg-gray-700">
            <td className="px-4 py-2">Shyam Dev</td>
            <td className="px-4 py-2">974386XXXX</td>
            <td className="px-4 py-2">HDFC (Panipat)</td>
            <td className="px-4 py-2">₹100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BankDetailPage;