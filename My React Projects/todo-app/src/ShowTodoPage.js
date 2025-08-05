function ShowToDoPage() {
  return (
    <div>
      <table class="min-w-full table-auto border border-gray-300 shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th class="px-6 py-3 border-b">Todo Title</th>
            <th class="px-6 py-3 border-b">Due Date</th>
            <th class="px-6 py-3 border-b">Mark Done</th>
          </tr>
        </thead>
        <tbody class="text-gray-800">
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-3 border-b">Meditate for 10 mins</td>
            <td class="px-6 py-3 border-b">4/aug/2025</td>
            <td class="px-6 py-3 border-b">✅</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-3 border-b">Watch React tutorial</td>
            <td class="px-6 py-3 border-b">6/aug/2025</td>
            <td class="px-6 py-3 border-b">✅</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-3 border-b">Buy groceries</td>
            <td class="px-6 py-3 border-b">1/aug/2025</td>
            <td class="px-6 py-3 border-b">✅</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-3 border-b">Review PR on GitHub</td>
            <td class="px-6 py-3 border-b">4/aug/2025</td>
            <td class="px-6 py-3 border-b">✅</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-3 border-b">Drink 2L water</td>
            <td class="px-6 py-3 border-b">10/sep/2025</td>
            <td class="px-6 py-3 border-b">✅</td>
          </tr>
          <tr class="hover:bg-gray-50">
            <td class="px-6 py-3 border-b">Stretch after work</td>
            <td class="px-6 py-3 border-b">15/dec/2025</td>
            <td class="px-6 py-3 border-b">✅</td>
          </tr>
        </tbody>
      </table>


    </div>
  )
}
export default ShowToDoPage