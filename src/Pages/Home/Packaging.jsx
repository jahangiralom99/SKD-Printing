import { FaCheckCircle } from "react-icons/fa";

const Packaging = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="  border-2 border-r-gray-400 border-b-gray-400 rounded mt-12">
        <img
          className="w-full"
          src="https://i.ibb.co/KXz7sxs/pleated-cardboard-3ef31c94-fill-1200x400.jpg"
          alt=""
        />
        <div className="p-8 flex flex-col lg:flex-row gap-12 lg:gap-5">
          <div className="lg:flex-1 space-y-6 text-xl">
            <h1 className="text-xl">Packaging professionals</h1>
            <p>
              Carton Manufacturers Ltd make a wide range of corrugated boxes and
              packaging materials, including self-adhesive labels and flexible
              packaging.
            </p>
            <p>
              Experienced packaging professionals will work with you to deliver
              a product of unequalled quality, exactly when your business needs
              it.
            </p>
            <p>Contact us today to start designing your packaging.</p>
          </div>
          <div className="lg:flex-1 text-xl space-y-6">
            <h1 className="flex items-center gap-2"><FaCheckCircle /> We are committed to</h1>
            <p className="flex items-center gap-2"> <FaCheckCircle />Understanding our customers needs</p>
            <p className="flex items-center gap-2"><FaCheckCircle /> Ensuring quality in everything we do</p>
            <p className="flex items-center gap-2"><FaCheckCircle /> Delivering in full and on time</p>
            <p className="flex items-center gap-2"><FaCheckCircle /> Pricing competitively</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packaging;
