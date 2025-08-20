import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (form.name && form.email && form.password) {
      navigate("/account");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Create your PopX account</h1>

      <div className="mt-6 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          className="w-full border rounded-md px-3 py-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone number*"
          className="w-full border rounded-md px-3 py-2"
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address*"
          className="w-full border rounded-md px-3 py-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password*"
          className="w-full border rounded-md px-3 py-2"
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company name"
          className="w-full border rounded-md px-3 py-2"
          onChange={handleChange}
        />

        <div className="flex items-center gap-4">
          <p className="text-sm font-medium">Are you an Agency?*</p>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="agency"
              value="yes"
              checked={form.agency === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="agency"
              value="no"
              checked={form.agency === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
