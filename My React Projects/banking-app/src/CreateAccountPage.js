import { useState } from "react";

function CreateAccountPage() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    alert
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-blue-300 mb-6 text-center">Create Your Bank Account</h1>

        {showAlert && (
          <div className="mb-4 p-4 bg-green-700 text-white rounded-md text-center font-semibold shadow-md">
            ✅ Account Created Successfully!
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-300 mb-1">Name</label>
          <input
            type='text'
            id="Name"
            name="Name"
            placeholder="Enter Your Name...."
            className="w-full px-5 py-3 bg-gray-900 text-white border border-blue-500 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-300 mb-1">Mobile Number</label>
          <input
            type='number'
            id="MobileNumber"
            name="MobileNumber"
            placeholder="Enter Your Mobile Number...."
            className="w-full px-5 py-3 bg-gray-900 text-white border border-blue-500 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-blue-300 mb-1">Select Your Bank</label>
          <select
            id="Bank"
            name="Bank"
            className="w-full px-5 py-3 bg-gray-900 text-white border border-blue-500 rounded-lg"
          >
            <option value="">--Select Your Bank--</option>
            <option value="SBI">State Bank of India (Panipat)</option>
            <option value="HDFC">HDFC Bank (Panipat)</option>
            <option value="ICICI">ICICI Bank (Panipat)</option>
            <option value="Axis">Axis Bank (Panipat)</option>
            <option value="PNB">Punjab National Bank (Panipat)</option>
            <option value="BOB">Bank of Baroda (Panipat)</option>
            <option value="Canara">Canara Bank (Panipat)</option>
            <option value="Kotak">Kotak Mahindra Bank (Panipat)</option>
            <option value="IndusInd">IndusInd Bank (Panipat)</option>
            <option value="YesBank">Yes Bank (Panipat)</option>
            <option value="IDFC">IDFC FIRST Bank (Panipat)</option>
            <option value="Union">Union Bank of India (Panipat)</option>
            <option value="Central">Central Bank of India (Panipat)</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-blue-300 mb-1">Password</label>
          <input
            type='password'
            id="Password"
            name="Password"
            placeholder="Enter Your Password...."
            className="w-full px-5 py-3 bg-gray-900 text-white border border-blue-500 rounded-lg"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountPage;