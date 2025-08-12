import { Link } from "react-router-dom";

function Header2() {
  return (
    <div className="flex items-center justify-between bg-black p-4 shadow-md border-b border-gray-800">
      {/* Left Section */}
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/"
            className="text-blue-300 font-semibold hover:text-white transition duration-200"
          >
            Home
          </Link>
        </li>
      </ul>

      {/* Right Section */}
      <ul className="flex space-x-4">
        <li>
          <Link
            to="/bank-detail"
            className="text-white hover:text-blue-400 font-medium transition duration-200"
          >
            Bank Details
          </Link>
        </li>
        <li>
          <Link
            to="/transfer"
            className="text-white hover:text-blue-400 font-medium transition duration-200"
          >
            Transfer
          </Link>
        </li>
        <li>
          <Link
            to="/transaction"
            className="text-white hover:text-blue-400 font-medium transition duration-200"
          >
            Transaction
          </Link>
        </li>
        <li>
          <Link
            to="/logout"
            className="text-red-400 hover:text-white font-medium transition duration-200"
          >
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header2;