import { FaFacebook } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div id="contact" className="max-w-screen-xl mx-auto px-4 mt-16">
      <div className="border-2 rounded p-8  mt-12 border-r-gray-400 border-b-gray-400 space-y-6 ">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:flex-1">
            <h1 className="text-2xl">Contact Us</h1>
            <form className="mt-8 space-y-4">
              <div className="flex gap-3 flex-col lg:flex-row">
                <input
                  className="py-3 font-semibold px-4 border border-gray-600 w-full rounded-md"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Name"
                />
                <input
                  className="py-3 font-semibold px-4 border border-gray-600 w-full rounded-md"
                  type="text"
                  name="name"
                  id=""
                  placeholder="Company Name"
                />
              </div>
              <input
                className="py-3 font-semibold px-4 border border-gray-600 w-full rounded-md"
                type="email"
                name="name"
                id=""
                placeholder="Email"
              />
              <input
                className="py-3 font-semibold px-4 border border-gray-600 w-full rounded-md"
                type="number"
                name="name"
                id=""
                placeholder="Phone Number"
              />
              <textarea
                className="border px-4 py-4 border-gray-500 rounded-md w-full"
                rows={5}
                name=""
                id=""
              ></textarea>
              <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
                <button
                  className="px-4 py-2 bg-[#2e3192] hover:bg-[#353bda] text-white font-bold rounded"
                  type="submit"
                >
                  Send Message
                </button>
                <button
                  className="px-5 py-2 bg-[#2e3192] hover:bg-[#353bda] text-white font-bold rounded"
                  type="submit"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="lg:flex-1">
            <h1 className="text-2xl">Contact Info</h1>
            <div className="flex gap-4 mt-8">
              <p className="font-bold">Office Address:</p>
              <p>
                Khan Mansion, Suit-9B (8th Floor) 28/A-5, Toyenbee Circular
                Road, Motijheel C/A, Dhaka-1000.
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <p className="font-bold">Factory Address:</p>
              <p>Kazirgaon Board press, Mtuail, Jatrabari, Dhaka-1362.</p>
            </div>
            <div className="flex gap-4 mt-8">
              <p className="font-bold">Phone:</p>
              <p>+88-02-7195111</p>
            </div>
            <div className="flex gap-4 mt-8">
              <p className="font-bold">Call:</p>
              <p>+88-01714113082</p>
            </div>
            <div className="flex gap-4 mt-8">
              <p className="font-bold">Email:</p>
              <p className="hover:underline">
              spn.jsr@gmail.com <br />
              info@sdk.com.bd
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <p className="font-bold">Facebook:
              </p>
              <FaFacebook className="text-3xl" />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
