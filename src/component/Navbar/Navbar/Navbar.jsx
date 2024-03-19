import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="n-wrapper">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li className="border rounded-md mr-2">
                  <a>Home</a>
                </li>
                <li className="border rounded-md mr-2">
                  <a>Services</a>
                </li>
                <li className="border rounded-md mr-2">
                  <a>Experience</a>
                </li>
                <li className="border rounded-md mr-2">
                  <a>Portfolio</a>
                </li>
                <li className="border rounded-md mr-2">
                  <a>Testimonial</a>
                </li>
                
              </ul>
            </div>
            <div className="flex justify-center items-center">
                <a className="btn btn-ghost text-xl">ASM Shuvo</a>
                <input type="checkbox" className="toggle" />
            </div>
           
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">
            <li className="border rounded-md mr-2">
                  <a>Home</a>
                </li>
                <li className="border rounded-md mr-2">
                  <a>Services</a>
                </li>
                <li className="border rounded-md mr-2">
                  <a>Experience</a>
                </li>
                <li className="border rounded-md mr-2">
                  <a>Portfolio</a>
                </li>
                <li className="border rounded-md mr-2">
                  <a>Testimonial</a>
                </li>
            </ul>
          </div>
          <div className="navbar-end">
          <button className="btn btn-sm text-gray-50 btn-warning">Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
