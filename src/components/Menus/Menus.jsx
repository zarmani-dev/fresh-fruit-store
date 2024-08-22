import React from "react";
import Fruit1 from "../../assets/fruits/apple.png";
import Fruit2 from "../../assets/fruits/avocado.png";
import Fruit3 from "../../assets/fruits/cherry.png";
import Fruit4 from "../../assets/fruits/orange.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const MenusData = [
  {
    id: 1,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: Fruit1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: Fruit2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: Fruit3,
    delay: 0.6,
  },
  {
    id: 4,
    title: "Fresh Red Apples",
    link: "/",
    price: "$3.99",
    img: Fruit4,
    delay: 0.8,
  },
];

const Menus = () => {
  return (
    <section className="">
      <div className="container pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenusData.map((menu) => (
            <motion.div
              variants={FadeLeft(menu.delay)}
              initial="hidden"
              whileInView={"visible"}
              whileHover={{ scale: 1.1 }}
              className="bg-slate-300 rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.2)] "
            >
              <img
                src={menu.img}
                alt=""
                className="w-[60px] mb-4 scale-125 transform -translate-y-6"
              />
              <div className="text-gray-900">
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-secondary font-semibold text-lg">
                  {menu.price}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
