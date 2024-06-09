import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className=" z-50 w-full">
      <div className="p-4 bg-[#2e3192]">
        <div className=" px-4">
          <h1 className="text-white flex items-center gap-3 justify-end font-bold">
            <IoCallSharp className="text-2xl" /> +254 724 259897
          </h1>
        </div>
      </div>
      <div className="p-3 bottom lg:flex items-center justify-between ">
        {/* mobile view menu Icons  */}
        <div className="lg:hidden bg-white rounded">
          <IoMdMenu
            onClick={() => setOpen(!open)}
            className="text-4xl cursor-pointer"
          />
        </div>
        <div className="lg:flex bottom-inner text-center items-center p-2 gap-2">
          <Link to="/">
            <img className="w-12 inline " src={logo} alt="logo.png" />
          </Link>
          <div>
            <h1 className="text-2xl font-medium text-[#2e3192]">
              SKD PRINTING & PACKAGING
            </h1>
            <p>“One of the leading corrugated master carton industry”</p>
          </div>
          {/* Phone View */}
          {open && (
            <div
              className={`list-none lg:hidden mt-3 cursor-pointer font-bold flex flex-col duration-500`}
            >
              <a href="#about" className=" p-2 border">About us</a>
              <a  href="#factory" className="border p-2">Factory Specs</a>
              <a href="#products" className="border p-2">Our Products</a>
              <a  href="#client" className="border p-2">Our Clients</a>
              <a  href="#packaging" className="border p-2">Packaging</a>
              <a  href="#contact" className="border p-2">Contact Us</a>
            </div>
          )}
        </div>
        <div className="lg:flex items-center hidden gap-6 font-bold list-none	">
          <a
            href="#about"
            className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]"
          >
            About us
          </a>
          <a
            href="#factory"
            className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]"
          >
            Factory Specs
          </a>
          <a
            href="#products"
            className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]"
          >
            Our Products
          </a>
          <a
            href="#client"
            className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]"
          >
            Our Clients
          </a>
          <a
            href="#packaging"
            className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]"
          >
            Packaging
          </a>
          <a
            href="#contact"
            className="border-b-2 cursor-pointer hover:border-b-4 hover:border-[#7fb069]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
