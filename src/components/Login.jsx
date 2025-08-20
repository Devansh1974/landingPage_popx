import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      navigate("/account");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Signin to your PopX account</h1>
      <p className="text-gray-500 text-sm mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label className="text-sm text-purple-700">Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full border rounded-md px-3 py-2 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm text-purple-700">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full border rounded-md px-3 py-2 mt-1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-gray-300 text-white py-3 rounded-md font-semibold"
        >
          Login
        </button>
      </div>
    </div>
  );
}
