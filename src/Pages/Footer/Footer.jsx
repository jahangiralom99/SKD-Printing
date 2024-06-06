import { IoCallSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom">
      <div className=" mt-12 p-12 bottom-inner h-[500px]">
        <div className="flex flex-col md:flex-row  gap-24 max-w-screen-xl mx-auto px-4">
          <div className="space-y-4">
            <p className="text-black">
              Carton Manufacturers Ltd <br /> Wundanyi Rd, Off Lunga-Lunga Rd <br />
              Industrial area Nairobi
            </p>
            <p className="flex items-center gap-2 hover:underline cursor-pointer">
              <IoCallSharp /> +254 724 259897
            </p>
            <p className="flex items-center gap-2 hover:underline cursor-pointer">
              <IoCallSharp /> +254 724 259897
            </p>
            <p className="flex items-center gap-2 hover:underline cursor-pointer">
              <IoCallSharp /> +254 724 259897
            </p>
            <p className="flex items-center gap-2 hover:underline cursor-pointer">
              <IoCallSharp /> +254 724 259897
            </p>
            <p className="flex items-center gap-2 hover:underline cursor-pointer">
              <IoCallSharp /> +254 724 259897
            </p>
          </div>
          <div className="space-y-4">
            <p className="hover:underline cursor-pointer"> About us</p>
            <p className="hover:underline cursor-pointer">Products</p>
            <p className="hover:underline cursor-pointer">Careers</p>
            <p className="hover:underline cursor-pointer">Contact</p>
          </div>
              </div>
              <p className="flex justify-end mt-8">© 2024 SKD Printing <Link to="https://ioniccorporation.com/">Ionic CORPORATION</Link> Privacy Policy. Crafted by Regulus.</p>
      </div>
    </footer>
  );
};

export default Footer;
