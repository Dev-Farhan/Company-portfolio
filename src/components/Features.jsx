import { motion } from "framer-motion";
import {
  BarChart2,
  DollarSign,
  Search,
  Code,
  Monitor,
  Smartphone,
} from "react-feather";

export default function ServicesSection() {
  const services = [
    {
      title: "Business Planning",
      description:
        "Empowering your business with innovative strategies and expert support to drive growth and success in today's competitive market.",
      icon: <BarChart2 size={30} className="text-purple-500" />,
      bgColor: "bg-purple-50",
    },
    {
      title: "Financial Planning",
      description:
        "Stay financially ahead with our expert budgeting, forecasting, and profit analysis services tailored for your business.",
      icon: <DollarSign size={30} className="text-red-500" />,
      bgColor: "bg-red-50",
    },
    {
      title: "Market Analytics",
      description:
        "Unlock market insights to gain a competitive edge. We analyze trends, customer behavior, and industry dynamics for smarter decisions.",
      icon: <Search size={30} className="text-blue-500" />,
      bgColor: "bg-blue-50",
    },
    {
      title: "Web Design",
      description:
        "Creative and user-friendly designs to provide a seamless experience for your audience, tailored to your brand's identity.",
      icon: <Monitor size={30} className="text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      title: "Web Development",
      description:
        "Building robust and scalable web applications with modern frameworks to meet your business needs effectively.",
      icon: <Code size={30} className="text-yellow-500" />,
      bgColor: "bg-yellow-50",
    },
    {
      title: "App Development",
      description:
        "Developing intuitive and powerful mobile applications for iOS and Android platforms to elevate your business outreach.",
      icon: <Smartphone size={30} className="text-teal-500" />,
      bgColor: "bg-teal-50",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
            Our Services
          </h2>
          <p className="text-gray-500 text-sm md:text-lg mt-4">
            We provide comprehensive solutions to empower your business with
            creativity and technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center mb-10 xl:mb-0"
              initial={{
                opacity: 0,
                y: index % 2 === 0 ? 50 : -50, // Animate from bottom or top based on index
                x: index % 3 === 0 ? -50 : index % 3 === 1 ? 50 : 0, // Animate from left or right based on index
              }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 25,
                duration: 1.2, // Adjust the duration to control the animation speed
              }}
            >
              <div className="flex items-center justify-center">
                <div
                  className={`w-20 py-7 flex justify-center ${service.bgColor} rounded-md mb-5 md:mb-10`}
                >
                  {service.icon}
                </div>
              </div>
              <h2 className="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
                {service.title}
              </h2>
              <p className="font-normal text-gray-400 text-sm md:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
