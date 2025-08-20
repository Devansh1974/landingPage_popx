import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

export default function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center h-full p-6 text-center">
      <Rocket size={50} className="text-purple-600 mb-4" />
      <h1 className="text-2xl font-bold">Welcome to PopX</h1>
      <p className="text-gray-500 text-sm mt-1">
        Powering your business with smart digital solutions 🚀
      </p>

      <div className="mt-8 space-y-3 w-full">
        <Link to="/signup">
          <button className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold">
            Create Account
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full bg-purple-200 text-purple-800 py-3 rounded-md font-semibold">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
}
