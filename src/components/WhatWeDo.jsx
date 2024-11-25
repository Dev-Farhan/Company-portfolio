import { motion } from "framer-motion";
import img1 from "../assets/image-1.svg";
import img2 from "../assets/image-2.svg";
import img3 from "../assets/image-3.svg";
import { GetInTouch } from "./GetInTouch";

export default function WhatWeDo() {
  return (
    <section id="works" className="py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
          What we do?
        </h1>

        <p className="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">
          At Infiniy InfoLab, we specialize in crafting innovative solutions in
          web design, development, digital marketing, and <br />
          mobile app creation to help businesses thrive in the digital era.
        </p>

        {/* First Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
          <motion.div
            className="mx-auto xl:mx-0 mb-20 xl:mb-0"
            initial={{ x: -100, opacity: 0 }} // Start from left with opacity 0
            animate={{ x: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1.2,
            }}
          >
            <img src={img1} alt="img" width={500} height={500} />
          </motion.div>

          <motion.div
            className="mx-auto xl:mx-0 text-center xl:text-left"
            initial={{ x: 100, opacity: 0 }} // Start from right with opacity 0
            animate={{ x: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1.2,
            }}
          >
            <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
              Design is our most intense <br /> process
            </h1>

            <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
              From ideation to execution, our design process ensures <br /> your
              brand's identity shines while delivering functionality that
              captivates <br /> and engages.
            </p>
          </motion.div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between mb-20 md:mb-40">
          <motion.div
            className="mx-auto xl:mx-0 text-center xl:text-left mb-20 xl:mb-0"
            initial={{ x: -100, opacity: 0 }} // Start from left with opacity 0
            animate={{ x: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1.2,
            }}
          >
            <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
              Don’t worry about the investment, <br /> it will come back.
            </h1>

            <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
              Your investment in our services is an investment in success.{" "}
              <br /> With a focus on impactful solutions, we ensure returns that
              drive <br /> growth and value.
            </p>
          </motion.div>

          <motion.div
            className="mx-auto xl:mx-0 mb-20"
            initial={{ x: 100, opacity: 0 }} // Start from right with opacity 0
            animate={{ x: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1.2,
            }}
          >
            <img src={img2} alt="img" width={500} height={500} />
          </motion.div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between">
          <motion.div
            className="mx-auto xl:mx-0 mb-20 xl:mb-0"
            initial={{ x: -100, opacity: 0 }} // Start from left with opacity 0
            animate={{ x: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1.2,
            }}
          >
            <img src={img3} alt="img" width={500} height={500} />
          </motion.div>

          <motion.div
            className="mx-auto xl:mx-0 text-center xl:text-left"
            initial={{ x: 100, opacity: 0 }} // Start from right with opacity 0
            animate={{ x: 0, opacity: 1 }} // Animate to original position and full opacity
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              duration: 1.2,
            }}
          >
            <h1 className="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
              Instantly understandable content <br /> is important
            </h1>

            <p className="font-normal text-gray-400 text-sm md:text-lg mb-5">
              Clear and concise content ensures your message reaches <br /> your
              audience without confusion, driving engagement <br />
              and trust.
            </p>
          </motion.div>
        </div>

        {/* Get In Touch Section */}
        <GetInTouch />

        <hr className="text-gray-300 mb-8"></hr>

        <p className="font-normal text-gray-500 text-md md:text-lg mb-4 md:mb-10 text-center">
          Let Infiniy InfoLab be your partner in transforming ideas into
          impactful digital solutions. Together, we build success.
        </p>
      </div>
    </section>
  );
}
