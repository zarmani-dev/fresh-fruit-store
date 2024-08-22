import { motion } from "framer-motion";
import React from "react";
import { FaFacebookF, FaInstagram, FaLeaf, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary/10 py-12 mt-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="container flex justify-between items-center"
      >
        {/* Logo Section  */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase ">
          <p className="text-primary">Fruit </p>
          <p className="text-secondary">Store</p>
          <FaLeaf className="text-green-500" />
        </div>
        {/* Social Section */}
        <div className="text-3xl flex items-center gap-4 mt-6 text-slate-200">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
