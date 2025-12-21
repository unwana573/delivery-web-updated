import { useState } from "react";
import logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass =
    "bg-[#FC8A06] text-white rounded-full px-4 py-1 text-center";

  const linkClass =
    "font-semibold text-black hover:text-[#FC8A06] transition";

  return (
    <>
      <div className="flex items-center justify-between bg-white shadow-md rounded-full px-6 py-4 w-[90%] mx-auto mt-4 max-md:w-[95%] max-md:rounded-2xl">

        <img src={logo} alt="logo" className="h-10" />

        <ul className="hidden md:flex gap-8">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : linkClass}>
            <li>Home</li>
          </NavLink>
          <NavLink to="/Browse_Menu" className={({ isActive }) => isActive ? activeClass : linkClass}>
            <li>Browse Menu</li>
          </NavLink>
          <NavLink to="/Special_Offer" className={({ isActive }) => isActive ? activeClass : linkClass}>
            <li>Special Offer</li>
          </NavLink>
          <NavLink to="/Restaurant" className={({ isActive }) => isActive ? activeClass : linkClass}>
            <li>Restaurant</li>
          </NavLink>
          <NavLink to="/Track_Order" className={({ isActive }) => isActive ? activeClass : linkClass}>
            <li>Track Order</li>
          </NavLink>
        </ul>

        <NavLink to="/Authentication" className={({ isActive }) => isActive ? activeClass : linkClass}>
        <button className="hidden md:flex items-center gap-2 bg-[#09092c] text-white px-6 py-3 rounded-full font-bold hover:bg-[#FC8A06] hover:scale-105 transition">
          <FontAwesomeIcon icon={faCircleUser} className="text-[#FC8A06]" />
          Login / Signup
        </button>
        </NavLink>

        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white z-999 transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6">
          <img src={logo} alt="logo" className="h-10" />
          <FontAwesomeIcon
            icon={faTimes}
            className="text-3xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-8 mt-10 px-6 text-lg">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/Browse_Menu" onClick={() => setMenuOpen(false)} className={linkClass}>
            Browse Menu
          </NavLink>
          <NavLink to="/Special_Offer" onClick={() => setMenuOpen(false)} className={linkClass}>
            Special Offer
          </NavLink>
          <NavLink to="/Restaurant" onClick={() => setMenuOpen(false)} className={linkClass}>
            Restaurant
          </NavLink>
          <NavLink to="/Track_Order" onClick={() => setMenuOpen(false)} className={linkClass}>
            Track Order
          </NavLink>
        </ul>

        <NavLink to="/Authentication" onClick={() => setMenuOpen(false)}>
          <button className="mt-auto mx-6 mb-6 bg-[#FC8A06] text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2">
            <FontAwesomeIcon icon={faCircleUser} />
            Login / Signup
          </button>
        </NavLink>
      </div>
    </>
  );
}

export default Navbar;
