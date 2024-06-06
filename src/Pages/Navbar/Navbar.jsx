import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="p-4 bg-[#2e3192]">
        <div className="max-w-screen-xl mx-auto px-4">
          <h1 className="text-white flex items-center gap-3 justify-end font-bold">
            <IoCallSharp className="text-2xl" /> +254 724 259897
          </h1>
        </div>
      </div>
      <div className="p-3 bottom lg:flex items-center justify-between ">
        <div className="lg:hidden">
          <IoMdMenu
            onClick={() => setOpen(!open)}
            className="text-4xl cursor-pointer"
          />
        </div>
        <div className="lg:flex bottom-inner text-center items-center p-2 gap-2">
          <img
            className="w-20 inline "
            src="https://i.ibb.co/YZDVhZS/logo-607597e43ea7.png"
            alt=""
          />
          <div>
            <h1 className="text-3xl font-medium text-[#2e3192]">
              Carton Manufacturers Ltd
            </h1>
            <p>Packaging that differentiates you...</p>
          </div>
          {open && (
            <div
              className={`list-none lg:hidden mt-3 cursor-pointer font-bold ${
                open ? "duration-500" : "hidden"
              }`}
            >
              <Link to="/about_us" className="border p-2">About us</Link>
              <li className="border p-2">Products</li>
              <li className="border p-2">Careers</li>
              <li className="border p-2">Contact</li>
            </div>
          )}
        </div>
        <div className="lg:flex items-center hidden gap-6 font-bold list-none	">
          <li className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]">About us</li>
          <li>Products</li>
          <li>Careers</li>
          <li>Contact</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
