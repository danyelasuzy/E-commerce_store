import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";
import Logo from "./Logo.jsx";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#F7EBD2] text-[#4B2E2B] py-8  border-t border-[#e5dcc4]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:space-y-0">
        {/* Left: Branding */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="shrink-0">
            <Logo className="w-10 h-10" />
          </Link>
          <p className="text-sm">Cakes made with 💖</p>
        </div>

        {/* Center: Navigation */}
        <div className="space-x-6 text-sm font-medium md:mr-22 ">
          <a href="/" className="hover:text-[#D7A86E] transition">
            Home
          </a>
          <a href="/menu" className="hover:text-[#D7A86E] transition">
            Menu
          </a>
          <a href="/contact" className="hover:text-[#D7A86E] transition">
            Contact
          </a>
          <a href="/about" className="hover:text-[#D7A86E] transition">
            About
          </a>
        </div>

        {/* Right: Contact or Socials */}
        <div className="text-sm flex items-center space-x-4">
          <span>Follow us:</span>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D7A86E]"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D7A86E]"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D7A86E]"
          >
            <FaTiktok size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-[#7c6f66] mt-6">
        © {new Date().getFullYear()} Sweet Crumbs. All rights reserved.
      </div>
    </footer>
  );
};
