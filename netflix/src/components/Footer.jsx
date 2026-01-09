import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-20 py-10 mt-15">
      
      {/* Social Icons */}
      <div className="flex gap-6 text-xl mb-8">
        <FaFacebookF className="hover:text-white cursor-pointer" />
        <FaInstagram className="hover:text-white cursor-pointer" />
        <FaTwitter className="hover:text-white cursor-pointer" />
        <FaYoutube className="hover:text-white cursor-pointer" />
      </div>

      {/* Footer Links */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Audio Description</p>
          <p className="hover:underline cursor-pointer">Investor Relations</p>
          <p className="hover:underline cursor-pointer">Legal Notices</p>
        </div>

        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Help Centre</p>
          <p className="hover:underline cursor-pointer">Jobs</p>
          <p className="hover:underline cursor-pointer">Cookie Preferences</p>
        </div>

        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Gift Cards</p>
          <p className="hover:underline cursor-pointer">Terms of Use</p>
          <p className="hover:underline cursor-pointer">Corporate Information</p>
        </div>

        <div className="space-y-3">
          <p className="hover:underline cursor-pointer">Media Centre</p>
          <p className="hover:underline cursor-pointer">Privacy</p>
          <p className="hover:underline cursor-pointer">Contact Us</p>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 mt-10">
        © 1997-2026 Netflix, Inc.
      </p>
    </footer>
  );
};

export default Footer;