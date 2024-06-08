import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

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
        <div className="lg:hidden bg-white rounded">
          <IoMdMenu
            onClick={() => setOpen(!open)}
            className="text-4xl cursor-pointer"
          />
        </div>
        <div className="lg:flex bottom-inner text-center items-center p-2 gap-2">
          <Link to="/">
            <img className="w-20 inline " src={logo} alt="logo.png" />
          </Link>
          <div>
            <h1 className="text-3xl font-medium text-[#2e3192]">
              SKD PRINTING & PACKAGING
            </h1>
            <p>“One of the leading corrugated master carton industry”</p>
          </div>
          {open && (
            <div
              className={`list-none lg:hidden mt-3 cursor-pointer font-bold duration-500`}
            >
              <li className="border p-2">
                <Link>About us</Link>
              </li>
              <li className="border p-2">Introduction</li>
              <li className="border p-2">About Us</li>
              <li className="border p-2">Factory Specs</li>
              <li className="border p-2">Our Products</li>
              <li className="border p-2">Our Clients</li>
              <li className="border p-2">Our Laboratory</li>
              <li className="border p-2">Contact Us</li>
            </div>
          )}
        </div>
        <div className="lg:flex items-center hidden gap-6 font-bold list-none	">
      
          <Link className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]">
            About us
          </Link>
          <Link className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]">
            Factory Specs
          </Link>
          <Link className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]">
            Our Products
          </Link>
          <Link className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]">
            Our Clients
          </Link>
          
          <Link className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
