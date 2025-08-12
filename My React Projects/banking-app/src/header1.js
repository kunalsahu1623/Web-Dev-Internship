import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="flex items-center justify-between bg-black p-4 shadow-md border-b border-gray-800">
            {/* Left Section */}
            <ul className="flex space-x-4">
                <li>
                    <Link
                        to="/"
                        className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md border border-gray-700 hover:bg-blue-600 transition duration-200 shadow-sm"
                    >
                        Home
                    </Link>
                </li>
            </ul>

            {/* Right Section */}
            <ul className="flex space-x-4">
                <li>
                    <Link
                        to="/create-account"
                        className="bg-yellow-500 text-black font-semibold px-4 py-2 rounded-md border border-gray-700 hover:bg-blue-600 transition duration-200 shadow-sm"
                    >
                        Create Account
                    </Link>
                </li>
                <li>
                    <Link
                        to="/login-account"
                        className="bg-blue-400 text-black font-semibold px-4 py-2 rounded-md border border-gray-700 hover:bg-blue-600 transition duration-200 shadow-sm"
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;