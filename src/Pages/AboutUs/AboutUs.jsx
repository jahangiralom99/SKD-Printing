import { Link } from "react-router-dom";
import images from "../../assets/pleated-cardboard.jpg";

const AboutUs = () => {
  return (
    <div>
      <img className="mx-auto w-full" src={images} alt="" />
      <div className="max-w-screen-xl mx-auto px-4 flex items-start gap-3 font-bold p-4 border border-b-2 border-b-gray-400">
        <Link className="hover:underline" to="/">
          Home
        </Link>{" "}
        /<p>About us</p>
      </div>
      <div className="max-w-screen-xl px-12 mx-auto">
        <div className="border-2 rounded p-8 text-center mt-12 border-r-gray-400 border-b-gray-400 space-y-6">
          <h1 className=" text-2xl ">Quality Assurance</h1>
          <p className="text-center ">
            Being a quality conscious organization, we are committed to offer a
            qualitative range of Packaging Materials to our clients. Our
            Packaging products undergo stringent quality tests in order to meet
            the quality standards. Right from sample approvals to final
            dispatch, our products are checked in order to ensure their quality.
          </p>
          <h1 className="text-2xl">Team</h1>
          <p>
            Our organization is backed with a highly qualified and experienced
            team of experts and professionals whose efforts have helped us to
            earn a reputed name in the market. Their expertise and rich
            industrial experience have helped the company to constantly climb
            the ladders of success. They work in close coordination and harmony
            to keep a regular tab on the market trends and needs.
          </p>
          <h1 className="text-2xl">Why Us?</h1>
          <p>
            We offer quality products that have helped us to develop a strong
            customer base all across the Country. Some of the reasons why we are
            counted above our competitors are:
          </p>
          <div className="text-center mt-8">
            <p>International quality</p>
            <hr className="mt-4 border" />
            <p className="mt-3">Use of latest technology</p>
            <hr className="mt-4 border" />
            <p className="mt-3">Ethical business practice</p>
            <hr className="mt-4 border" />
            <p className="mt-3">Efficient team</p>
            <hr className="mt-4 border" />
            <p className="mt-3">Customization facility</p>
            <hr className="mt-4 border" />
            <p className="mt-3">Timely delivery</p>
            <p className="mt-6">
              Guided by these factors, all our endeavors are directed towards
              attaining maximum customer satisfaction.
            </p>
          </div>
          <div className="text-center pt-12">
            <h1 className="text-2xl">Summery</h1>
            <p className="pt-6">
              <span className="font-semibold">Name of Institution :</span> SDK
              Printing & Packaging
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Factory Address </span> Khan
              Mansion, Suit-9B (8th Floor) 28/A-5, Toyenbee Circular Road,
              Motijheel C/A, Dhaka-1000.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Nature of Business : </span>{" "}
              Printing & Packaging.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Major products : </span>Corrugated
              Fiber Board Carton or Shipping Carton.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Production Capacity :</span> 8
              metric ton (per day)
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Commercial Office : </span>600
              sqft.
            </p>
            <hr className="mt-4 border" />
            <p className="mt-3">
              <span className="font-semibold">Factory Area : </span>14,000 sqft.
              sqft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
