import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Navbar = () => {
  // React's useState Hook allows us to track state in a function component
  // State generally refers to data or properties that need to be tracking in an application.

  // Syntax:
  // const [current state, function to update state] = useState(initial state)
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="sm:px-10 px-5 w-full flex items-center py-5 fixed top-0 z-20 bg-transparent">
      <div className="w-full flex justify-between items-center max-w-8xl mx-auto">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="/logo.png"
            alt="logo"
            className="lg:w-[95px] md:w-[80px] sm:w-[65px] w-[50px] h-auto object-contain"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-x-28">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
              hover:text-white text-[18px] font-large font-medium cursor-pointer glow`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* For mobile view, display menu icon instead of about, work, contact */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? "/close.svg" : "menu.svg"}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 orange-bg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  }
              font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
