import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-blue-400 border-b border-black p-4 shadow-md">
      <ul className="flex justify-center gap-6">
        <li>
          <Link
            to="/Add"
            className="bg-yellow-300 hover:bg-blue-600 text-black font-semibold px-5 py-2 rounded-lg transition duration-300"
          >
            Add
          </Link>
        </li>
        <li>
          <Link
            to="/Show"
            className="bg-green-400 hover:bg-blue-600 text-black font-semibold px-5 py-2 rounded-lg transition duration-300"
          >
            Show
          </Link>
        </li>
        <li>
          <Link
            to="/Done"
            className="bg-violet-700 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg transition duration-300"
          >
            Done
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;