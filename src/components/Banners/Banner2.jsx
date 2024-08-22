import React from "react";
import BannerImg from "../../assets/fruit-plate2.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utility/animation";

const Banner = () => {
  return (
    <section className="">
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24">
        {/* Banner Info */}
        <div>
          <div className="text-center md:text-left space-y-4 md:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-6xl font-bold uppercase"
            >
              online fruit store
            </motion.h1>
            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              assumenda incidunt perspiciatis mollitia nam cumque non nisi
              ratione? Itaque earum quidem tenetur sed laudantium illum corrupti
              accusamus veniam quo aspernatur? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Nobis recusandae quas ut vitae fugit
              molestias non possimus. Harum, totam. Autem voluptas in vel natus
              obcaecati aliquid, odio vitae dolorem officiis!
            </motion.p>
            <motion.div
              variants={FadeUp(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Download the App</button>
            </motion.div>
          </div>
        </div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            viewport={{ once: true }}
            src={BannerImg}
            alt=""
            className="w-[350px] md:max-w-[500px] h-full object-cover drop-shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
