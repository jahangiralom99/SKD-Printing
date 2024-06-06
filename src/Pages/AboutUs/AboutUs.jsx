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
        <div className="border-2 rounded p-8 mt-12 border-r-gray-400 border-b-gray-400">
          <h1 className="text-4xl font-semibold text-[#7fb069]">About us</h1>
          <p className="text-xl font-semibold text-[#7fb069] mt-4">
            Thinking beyond the box
          </p>
          <p className="mt-4">
            Carton Manufacturers Ltd is a family owned business which was
            founded in 1979. Over the years we have established ourselves as one
            of the biggest and most reliable corrugated box manufacturing plants
            in Kenya. With true dedication to customer service, we have now
            expanded our portfolio of products into a wider range of packaging
            materials, including self-adhesive labels and flexible packaging.
          </p>
          <h1 className="mt-4 font-semibold text-2xl text-[#7fb069] ">
            Our commitment to quality
          </h1>
          <p className="mt-4 font-bold">We are committed to:</p>
          <div className="mt-4 ml-4">
            <li>Understanding our customers needs</li>
            <li>Ensuring quality in everything we do</li>
            <li>Pledging we deliver in full and on time</li>
            <li>Competitive pricing</li>
          </div>
          <p className="mt-4">
            Our commitment to quality and excellence in services is reflected by
            our ISO 9001:2008 certification. We strongly believe in the
            implementation of continual improvement projects, systems and
            investment in state-of-the art technology.
          </p>
          <div className="mt-12 space-y-6">
            <h1 className="text-xl font-bold">Quality Policy Statement</h1>
            <p>
              Carton Manufacturers Limited is committed to being the customer’s
              preferred supplier for corrugated packaging and labels, by
              delivering quality products on time in accordance with the highest
              professional standards
            </p>
            <p>
              We will operate and continually improve the effectiveness of our
              ISO 9001:2015 Quality Management System to ensure maintenance of
              high service standards.{" "}
            </p>
            <p>
              We will comply with all applicable laws and regulations and will
              implement programs and procedures to assure compliance.
            </p>
            <p>
              To this end, performance is measured at every level and
              improvement implemented consistently and effectively.
            </p>
            <p>
              Furthermore, the company pro-actively seeks and values customer
              feedback as a means of maximizing effectiveness and meeting
              expectations.
            </p>
            <p>
              Relevant and regular staff training is considered essential
              throughout the company in order to achieve the stated objectives.
            </p>
            <p>
              We will communicate our commitment to quality to our employees,
              external providers, customers and other interested parties (where
              appropriate).
            </p>
            <p>
              The Management and staff of Carton Manufacturers Limited are
              committed to attaining the objectives of the quality policy and
              shall review these objectives and the quality policy periodically
              for continuing suitability to ensure achievement of customer
              satisfaction.
            </p>
            <h1 className="text-[#7fb069] text-xl">CML Food Safety Policy</h1>
            <p>
              Carton Manufacturers Ltd is committed to the processing of boards
              and corrugated cartons that ensures safe packaging of food meant
              for human consumption through the implementation of FSSC 22000
              (ISO 22000: 2018 + ISO/TS 22002-4: 2013 + Additional requirements)
              Scheme Certification.
            </p>
            <p>Our full food safety policy is available for <span className="text-[#7fb069]">download.</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
