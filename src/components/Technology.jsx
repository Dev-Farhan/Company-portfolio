import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFigma,
  SiAdobexd,
  SiCanva,
} from "react-icons/si";

export default function Technology() {
  const technologies = [
    { icon: <FaHtml5 size={50} className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt size={50} className="text-blue-500" />, name: "CSS" },
    {
      icon: <FaJs size={50} className="text-yellow-500" />,
      name: "JavaScript",
    },
    { icon: <FaReact size={50} className="text-teal-500" />, name: "React" },
    {
      icon: <FaNodeJs size={50} className="text-green-500" />,
      name: "Node.js",
    },
    {
      icon: <SiExpress size={50} className="text-gray-500" />,
      name: "Express",
    },
    {
      icon: "",
      name: "",
    },
    {
      icon: <SiMongodb size={50} className="text-green-700" />,
      name: "MongoDB",
    },
    { icon: <SiFigma size={50} className="text-purple-500" />, name: "Figma" },
    {
      icon: <SiAdobexd size={50} className="text-pink-500" />,
      name: "Adobe XD",
    },
    { icon: <SiCanva size={50} className="text-blue-400" />, name: "Canva" },
  ];

  return (
    <section id="tech" className="py-8 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
            Technologies We Use
          </h2>
          <p className="text-gray-500 text-sm md:text-lg mt-4">
            We leverage cutting-edge tools and technologies to deliver top-notch
            solutions.
          </p>
        </div>

        {/* Animated Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:px-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <div className="w-20 h-20 flex items-center justify-center">
                {tech.icon}
              </div>
              <p className="text-gray-700 mt-2 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
