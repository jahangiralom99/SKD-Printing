import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom ">
      <div className=" mt-12 p-12 bottom-inner ">
        <div className="flex flex-col md:flex-row  gap-24 max-w-screen-xl mx-auto px-4">
          <div className="space-y-4">
            <p className="text-black">
           <span className="font-semibold text-xl">SDK Printing & Packaging</span> <br /> Khan Mansion, Suit-9B (8th Floor) 28/A-5, <br /> Toyenbee Circular Road, <br /> Motijheel C/A, Dhaka-1000.
            </p>
            <p className="flex items-center gap-2 hover:underline cursor-pointer">
              <IoCallSharp /> +88-01714113082
            </p>
         
          </div>
          <div className="space-y-4">
            <p className="hover:underline cursor-pointer"> About us</p>
            <p className="hover:underline cursor-pointer">Products</p>
            <p className="hover:underline cursor-pointer">Careers</p>
            <p className="hover:underline cursor-pointer">Contact</p>
          </div>
        </div>
        <p className="flex flex-col lg:flex-row justify-end gap-3 mt-8">
          © 2024 SKD Printing{" "}
          <Link to="https://ioniccorporation.com/">Ionic CORPORATION</Link>{" "}
          Privacy Policy. Crafted by Regulus.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
