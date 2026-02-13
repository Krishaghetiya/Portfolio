import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#030712] min-h-screen mt-[-30px] flex items-center justify-center px-6 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://muvico.vercel.app/static/media/contact.cb0bfad23f76542a61b307d4c6848ee8.svg"
            alt="Contact Illustration"
            className="w-[90%] md:w-[80%] lg:w-[90%]"
          />
        </div>

        {/* Right Form */}
        <div className="flex-1 bg-[#030712] border border-gray-900 p-8 rounded-xl shadow-lg">
          <h2 className="text-white text-2xl font-semibold mb-6">
            Get in touch !
          </h2>

          <form className="space-y-5">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name :"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-orange-500"
              />
              <input
                type="email"
                placeholder="Email :"
                className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject :"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-orange-500"
            />

            {/* Message */}
            <textarea
              placeholder="Message :"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none focus:border-orange-500"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
