// import images from "../../assets/pleated-cardboard.jpg";
import profile from "../../assets/profile.jpeg";

const AboutUs = () => {
  return (
    <div id="about" className="max-w-screen-xl px-4 mx-auto mt-16">
      <div className="border-2 rounded p-8 text-center mt-12 border-r-gray-400 border-b-gray-400 space-y-6">
        <div className="flex flex-col lg:flex-row items-center gap-6 justify-center p-4">
          <div className="text-start space-y-4 flex-1">
            <h1 className="text-3xl font-semibold">Introduction</h1>
            <p className="w-32 h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full mt-4"></p>
            <p>
              SDK Printing & Packaging is a Proprietorship Company, established
              in August 01, 2008 with a view to manufacturing Corrugated Fiber
              Board and its related paper box products. The company is involved
              in the Paper Converting and Printing Business. It is mentionable
              that the proprietor of the company Mr. Golam Sarwar is highly
              educated (IT Engineer experienced at Toyoda Gosei, Cannon &
              Panasonic EV Energy, Japan) and have long experience in this line
              of business as family business. He is also General Body Member of
              FBCCI.
            </p>
          </div>
          <div className="">
            <img
              className="w-80 rounded-full border-2"
              src={profile}
              alt="profile"
            />
          </div>
        </div>
        <h1 className=" text-2xl ">Quality Assurance</h1>
        <p className="text-center ">
          Being a quality conscious organization, we are committed to offer a
          qualitative range of Packaging Materials to our clients. Our Packaging
          products undergo stringent quality tests in order to meet the quality
          standards. Right from sample approvals to final dispatch, our products
          are checked in order to ensure their quality.
        </p>
        <h1 className="text-2xl">Team</h1>
        <p>
          Our organization is backed with a highly qualified and experienced
          team of experts and professionals whose efforts have helped us to earn
          a reputed name in the market. Their expertise and rich industrial
          experience have helped the company to constantly climb the ladders of
          success. They work in close coordination and harmony to keep a regular
          tab on the market trends and needs.
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
            <span className="font-semibold">Commercial Office : </span>600 sqft.
          </p>
          <hr className="mt-4 border" />
          <p className="mt-3">
            <span className="font-semibold">Factory Area : </span>14,000 sqft.
            sqft.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
