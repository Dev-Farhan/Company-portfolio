import Logo from "../assets/Logo1.svg";
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-green-50 py-8 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="lg:flex flex-col md:flex-row text-center lg:text-left lg:justify-between">
          {/* Logo and description */}
          <div className="mb-10 lg:mb-0">
            <img
              src={Logo}
              alt="Footer Logo"
              className="mb-5 mx-auto lg:mx-0"
              width={150} // Adjust the width as needed
              height={50} // Adjust the height as needed
            />
            <p className="font-normal text-gray-400 text-md">
              At Infiniy InfoLab, we transform ideas into reality. As a
              full-service
              <br></br>
              digital agency, we specialize in providing creative and<br></br>
              cutting-edge solutions tailored to your business needs.
            </p>
          </div>

          {/* Our Services */}
          <div className="space-y-4 mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">
              Our Services
            </h4>
            <Link
              to="services" // Target section ID
              smooth={true}
              duration={500}
              offset={-100}
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300 cursor-pointer"
            >
              Web Development
            </Link>
            <Link
              to="services" // Target section ID
              smooth={true}
              duration={500}
              offset={-100}
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300 cursor-pointer"
            >
              UI Design
            </Link>
            <Link
              to="services" // Target section ID
              smooth={true}
              duration={500}
              offset={-100}
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300 cursor-pointer"
            >
              Animation
            </Link>
            <Link
              to="services" // Target section ID
              smooth={true}
              duration={500}
              offset={-100}
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300 cursor-pointer"
            >
              Development
            </Link>
          </div>

          {/* Our Company */}
          <div className="space-y-4 mb-10 lg:mb-0">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">
              Our Company
            </h4>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Reporting
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Get in Touch
            </a>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              Management
            </a>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-500 text-lg mb-6">
              Our services
            </h4>
            <a
              href="#"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              121 King St, VIC3000, US
            </a>
            <a
              href="tel:+188812342287"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              888-123-42287
            </a>
            <a
              href="mailto:info@example.com"
              className="block font-normal text-gray-400 text-md hover:text-gray-700 transition ease-in-out duration-300"
            >
              info@example.com
            </a>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="text-gray-300 mt-10" />

        {/* Footer Copyright */}
        <p className="font-normal text-gray-400 text-md text-center mt-5">
          &copy; 2024 Infinity InfoLab Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
