import React from "react";
import logo from "../../assets/Phone_icon.png";


function Header() {
  return (
    <nav className="navbar flex justify-center md:justify-between py-4 px-10 bg-purple-900 shadow-lg shadow-custom-green w-full">
      <div className="logo bg-white rounded-3xl">
        <img src={logo} alt="logo" className="h-10 md:block hidden" />
      </div>
      <ul className="group nav-details flex space-x-5 md:px-4 text-[14px] md:text-lg text-white font-bold cursor-pointer">
        <li className="group-hover:text-custom-green transition duration-300">
          Home
        </li>
        <li className="group-hover:text-custom-green transition duration-300">
          About
        </li>
        <li className="group-hover:text-custom-green transition duration-300">
          Catalogue
        </li>
        <li className="group-hover:text-custom-green transition duration-300">
          Contact Us
        </li>
      </ul>
    </nav>
  );
}

export default Header;