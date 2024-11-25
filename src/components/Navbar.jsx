import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/Logo1.svg";
import { Link } from "react-scroll"; // Import Link from react-scroll

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="flex-wrap lg:flex items-center justify-between px-4 lg:mr-5">
      <div className="flex items-center justify-between mb-10 lg:mb-0">
        <img src={Logo} width={190} height={125} alt="Logo" />
        <button
          className="flex items-center justify-center border border-[#31abe1] w-10 h-10 text-green-500 rounded-md outline-none lg:hidden ml-auto"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <FiMenu size={20} />
        </button>
      </div>
      <ul
        className={`lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20 ${
          navbarOpen ? "block" : "hidden"
        }`}
      >
        <li className="font-medium text-green-500 text-lg hover:text-black transition ease-in-out duration-300 mb-5 lg:mb-0">
          {/* Use Link from react-scroll */}
          <Link
            to="services" // This is the target section id
            smooth={true} // Enable smooth scrolling
            duration={500} // Set scroll duration in ms
            offset={-100} // Optional: adjust scroll offset for better positioning
          >
            Services
          </Link>
        </li>
        <li className="font-medium text-green-500 text-lg hover:text-black transition ease-in-out duration-300 mb-5 lg:mb-0">
          {/* Use Link from react-scroll */}
          <Link
            to="works" // This is the target section id
            smooth={true}
            duration={500}
            offset={-100}
          >
            Works
          </Link>
        </li>
        <li className="font-medium text-green-500 text-lg hover:text-black transition ease-in-out duration-300 mb-5 lg:mb-0">
          {/* Use Link from react-scroll */}
          <Link
            to="tech" // This is the target section id
            smooth={true}
            duration={500}
            offset={-100}
          >
            Technology
          </Link>
        </li>
        <li className="px-8 py-3 font-medium text-green-500 text-lg text-center border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300">
          {/* Use a standard anchor for mailto link */}
          <a
            href="mailto:digiflux.mail@gail.com?subject=Project Inquiry&body=Hello, I would like to discuss a project."
            className="font-medium text-green-500 text-lg hover:text-black transition ease-in-out duration-300"
          >
            Connect
          </a>
        </li>
      </ul>
    </nav>
  );
}
