import pran from "../../assets/pran.svg";
import akij from "../../assets/akij.svg";
import dubur from "../../assets/dabur.svg";
import hamdard from "../../assets/hamdard.svg";
import tatka from "../../assets/tatka.svg";
import nzdairy from "../../assets/newZland.svg";
import cavin from "../../assets/calvin.svg";
import godrej from "../../assets/godrez.svg";
import universal from "../../assets/universal.svg";

const OurClients = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-12">
      <div className="border-2 rounded p-8  mt-12 border-r-gray-400 border-b-gray-400 space-y-6">
        <h1 className="text-2xl text-center">Our Valuable Clients</h1>
        <p className="w-32 mx-auto h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mt-4"></p>
              <p className="text-center">We feel proud to work with our clients.</p>
              {/* All Group images and names */}
        <div className="flex gap-[1px] items-center flex-wrap justify-center">
          <div className="bg-[#efa8b0] flex flex-col items-center gap-6 w-56 h-44 p-3 rounded-md">
            <img src={pran} alt="logo" />
            <h1 className="text-3xl text-white ">PRAN</h1>
          </div>
          <div className="bg-[#c79cc8] flex flex-col items-center gap-6 w-56 h-44 p-3  rounded-md">
            <img src={akij} alt="logo" />
            <h1 className="text-3xl text-white ">AKIJ</h1>
          </div>
          <div className="bg-[#a89cc8] flex flex-col items-center gap-6 w-56 h-44 p-3 rounded-md">
            <img src={dubur} alt="logo" />
            <h1 className="text-3xl text-white ">DABUR</h1>
          </div>
          <div className="bg-[#9bb2e1] flex flex-col items-center gap-6 w-56 h-44 p-3  rounded-md">
            <img src={hamdard} alt="logo" />
            <h1 className="text-3xl text-white ">HAMDARD</h1>
          </div>
          <div className="bg-[#c79cc8] flex flex-col items-center gap-6 w-56 h-44 p-3 rounded-md">
            <img src={tatka} alt="logo" />
            <h1 className="text-3xl text-white ">TATKA</h1>
          </div>
          <div className="bg-[#F0C2E0] flex flex-col items-center gap-6 w-56 h-44 p-3  rounded-md">
            <img src={nzdairy} alt="logo" />
            <h1 className="text-3xl text-white ">N Z DAIRY</h1>
          </div>
          <div className="bg-[#8cc9f0] flex flex-col items-center gap-6 w-56 h-44 p-3  rounded-md">
            <img src={cavin} alt="logo" />
            <h1 className="text-3xl text-white ">CAVIN CARE</h1>
          </div>
          <div className="bg-[#9bb2e1] flex flex-col items-center gap-6 w-56 h-44 p-3  rounded-md">
            <img src={godrej} alt="logo" />
            <h1 className="text-3xl text-white ">GODREJ</h1>
          </div>
          <div className="bg-[#a89cc8] flex flex-col items-center gap-6 w-56 h-44 p-3  rounded-md">
            <img src={universal} alt="logo" />
            <h1 className="text-3xl text-white ">UNIVERSAL</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
