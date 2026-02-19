import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <nav className="flex justify-around items-center px-4 py-3 bg-white shadow-sm">
      <div className="text-xl font-bold">
        <Link to="/">URL-Shortener</Link>
      </div>

      <div>
        <ul className="flex items-center gap-6 list-none">
          <li className="cursor-pointer hover:text-blue-600">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            {" "}
            <Link to="/About">About</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <Link to="/contact">Contact</Link>
          </li>
          {state.token ? (
            <li
              onClick={logout}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition"
            >
              Logout
            </li>
          ) : (
            <li className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
