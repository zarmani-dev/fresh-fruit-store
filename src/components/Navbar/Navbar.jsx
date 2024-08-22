import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdMenu, MdOutlineShoppingCart } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import ResponsiveMenu from "./ResponsiveMenu";

import { AnimatePresence, motion } from "framer-motion";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About",
    link: "#",
  },
  {
    id: 3,
    title: "Menu",
    link: "#",
  },
  {
    id: 4,
    title: "Shop",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="container flex justify-between items-center py-4 md:pt-4 "
        >
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase ">
            <p className="text-primary">Fruit </p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          {/* Menu Section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-slate-200">
              {NavbarMenu.map((menu) => (
                <li
                  key={menu.id}
                  className="cursor-pointer inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_-1px_#ef4444] font-semibold duration-150"
                >
                  <a href={menu.link}>{menu.title}</a>
                </li>
              ))}
              <button>
                <MdOutlineShoppingCart className="text-2xl hover:bg-primary hover:text-white rounded-full duration-100" />
              </button>
            </ul>
          </div>

          {/* Mobile Hamburger Menu Section */}
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <RxCross1 className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </motion.div>
        </motion.div>
      </nav>

      {/* Mobile Menu Section */}
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
