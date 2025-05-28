import { FaUser, FaEnvelope } from "react-icons/fa";
import { useState, useRef } from "react";

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <div className="md:pb-6 min-h-screen flex justify-center items-center py-16 md:px-4  bg-[linear-gradient(135deg,_#F7EBD2,_#F6D6A8,_#F2BFAF)]">
      <div className="w-120 px-4 md:px-4 md:w-150">
        <h2 className="text-center italic text-2xl md:text-3xl font-bold mb-8  bg-[#8B7E74] bg-clip-text text-transparent leading-right">
          Love is sweet — and so is your cake!
        </h2>
        <p className="text-center text-[#8B7E74] mb-3">
          Tell us what you’re dreaming of, and we’ll bake it into reality.
        </p>
        <p className="text-center text-[#8B7E74] font-semibold mb-4">
          Send us a message to start your custom anniversary order!
        </p>
        <form ref={form} className="space-y-6" onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600 text-lg">
              <FaUser />
            </span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              required
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="pl-10 w-full bg-white border border-gray-300 rounded px-4 py-3 text-gray-800 transition focus:outline-none focus:border-[#F5C45E]"
            />
          </div>
          <div className="relative mb-4">
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-600 text-lg">
              <FaEnvelope className=" text-gray-600" />
            </span>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="pl-10 w-full bg-white border border-gray-300 rounded px-4 py-3 text-gray-800 transition focus:outline-none focus:border-[#F5C45E]"
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-gray-800 transition focus:outline-none focus:border-[#F5C45E]"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#734b91] text-white py-2 px-4 md:py-3 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(253,224,71,0.3)] "
            >
              Send Message
            </button>
          </div>
          {statusMessage && (
            <p className="mt-2 text-[#F5C45E] text-center">{statusMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};
