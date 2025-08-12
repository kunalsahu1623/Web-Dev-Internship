import { useNavigate } from "react-router-dom";

function LogoutPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have logged out.");
    navigate("/login"); // Change this path if your login route is different
  };

  return (
    <div className="min-h-screen bg-gray-900 text-blue-300 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl font-bold">Ready to logout?</h1>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow"
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutPage;