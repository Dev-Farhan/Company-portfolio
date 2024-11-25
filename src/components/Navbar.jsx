import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons
import Logo from "../assets/Logo1.svg";
import { Link } from "react-scroll"; // Import Link from react-scroll
import { motion, AnimatePresence } from "framer-motion"; // Import framer motion

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Animation variants for Framer Motion
  const backdropVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
    exit: { x: "100%" },
  };

  return (
    <nav className="flex-wrap lg:flex lg:flex-row items-center justify-between px-4 lg:mr-5 relative">
      <div className="flex items-center justify-between mb-10 lg:mb-0 w-full">
        <img src={Logo} width={190} height={125} alt="Logo" />
        <button
          className="flex items-center justify-center border border-[#31abe1] w-10 h-10 text-green-500 rounded-md outline-none lg:hidden ml-auto"
          onClick={() => setNavbarOpen(true)}
        >
          <FiMenu size={20} />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-row lg:items-center lg:space-x-20">
          <li className="font-medium text-green-500 text-lg hover:text-black transition ease-in-out duration-300">
            <Link to="services" smooth={true} duration={500} offset={-100}>
              Services
            </Link>
          </li>
          <li className="font-medium text-green-500 text-lg hover:text-black transition ease-in-out duration-300">
            <Link to="works" smooth={true} duration={500} offset={-100}>
              Works
            </Link>
          </li>
          <li className="font-medium text-green-500 text-lg hover:text-black transition ease-in-out duration-300">
            <Link to="tech" smooth={true} duration={500} offset={-100}>
              Technology
            </Link>
          </li>
          <li className="px-8 py-3 font-medium text-green-500 text-lg text-center border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300">
            <a
              href="mailto:digiflux.mail@gail.com?subject=Project Inquiry&body=Hello, I would like to discuss a project."
              className="font-medium text-green-500 text-lg hover:text-black transition ease-in-out duration-300"
            >
              Connect
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            className="fixed inset-0 bg-green-500 text-white z-50 flex flex-col justify-center items-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <button
              className="absolute top-5 right-5 text-white text-3xl"
              onClick={() => setNavbarOpen(false)}
            >
              <FiX />
            </button>
            <ul className="flex flex-col items-center space-y-8">
              <li className="font-medium text-lg">
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setNavbarOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li className="font-medium text-lg">
                <Link
                  to="works"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setNavbarOpen(false)}
                >
                  Works
                </Link>
              </li>
              <li className="font-medium text-lg">
                <Link
                  to="tech"
                  smooth={true}
                  duration={500}
                  offset={-100}
                  onClick={() => setNavbarOpen(false)}
                >
                  Technology
                </Link>
              </li>
              <li>
                <a
                  href="mailto:digiflux.mail@gail.com?subject=Project Inquiry&body=Hello, I would like to discuss a project."
                  className="px-8 py-3 font-medium text-center border-2 border-white rounded-md hover:bg-white hover:text-green-500 transition ease-linear duration-300"
                  onClick={() => setNavbarOpen(false)}
                >
                  Connect
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
