import React from "react";
import BannerImg from "../../assets/banner-bg.jpg";
import { backIn, motion } from "framer-motion";
import { FadeLeft } from "../../utility/animation";

const bgStyle = {
  backgroundImage: `url(${BannerImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment: "fixed",
};

const Banner = () => {
  return (
    <section className="container mb-12">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 md:py-24 rounded-3xl"
      >
        {/* blank div */}
        <div></div>
        {/* Banner Info */}
        <div>
          <div className="text-center md:text-left space-y-4 md:max-w-[400px]">
            <motion.h1
              variants={FadeLeft(0.5)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold uppercase text-gray-900"
            >
              Get fresh fruits today
            </motion.h1>
            <motion.p
              variants={FadeLeft(0.7)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: true }}
              className="text-gray-700"
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
              variants={FadeLeft(1.1)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="primary-btn ">Learn More</button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
