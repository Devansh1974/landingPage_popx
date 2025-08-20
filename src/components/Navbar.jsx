import { Link } from "react-router-dom";
import { Home, LogIn, UserPlus, User } from "lucide-react";

export default function Navbar({ currentPath }) {
  const navItems = [
    { path: "/", label: "Home", icon: <Home size={20} /> },
    { path: "/login", label: "Login", icon: <LogIn size={20} /> },
    { path: "/signup", label: "Signup", icon: <UserPlus size={20} /> },
    { path: "/account", label: "Account", icon: <User size={20} /> },
  ];

  return (
    <div className="flex justify-around border-t bg-white py-2 fixed bottom-0 w-full max-w-md">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex flex-col items-center text-xs ${
            currentPath === item.path ? "text-purple-600 font-semibold" : "text-gray-500"
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
