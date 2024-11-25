import Homeimg from "../assets/home-img.svg";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="flex flex-col xl:flex-row justify-between items-center xl:py-0 lg:px-16">
      {/* Left Section */}
      <motion.div
        className="text-center xl:text-left mb-10 xl:mb-0"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-bold text-gray-700 text-3xl md:text-6xl leading-tight mb-6">
          Welcome to <br /> Infiniy InfoLab
        </h1>
        <p className="font-normal text-gray-500 text-sm md:text-lg mb-8 max-w-md">
          At Infiniy InfoLab, we transform ideas into reality. As a full-service
          digital agency, we specialize in providing creative and cutting-edge
          solutions tailored to your business needs.
        </p>
        <div className="flex items-center justify-center lg:justify-start space-x-4">
          {/* Primary Button */}
          <a
            href="#"
            className="px-8 py-3 bg-green-500 text-white font-medium text-md md:text-lg rounded-md hover:bg-white hover:text-green-500 hover:border hover:border-green-500 transition ease-in-out duration-300"
          >
            Get's Started
          </a>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className=""
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={Homeimg} alt="Home img" />
      </motion.div>
    </header>
  );
}
