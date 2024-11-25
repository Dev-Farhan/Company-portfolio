import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFigma,
  SiAdobexd,
  SiCanva,
} from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: 10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div id="tech" className="pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies We Use
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-orange-500"
        >
          <FaHtml5 className="text-7xl text-orange-500" /> {/* HTML5 */}
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-500"
        >
          <FaCss3Alt className="text-7xl text-blue-500" /> {/* CSS3 */}
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-yellow-500"
        >
          <FaJs className="text-7xl text-yellow-500" /> {/* JavaScript */}
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-400"
        >
          <FaReact className="text-7xl text-blue-400" /> {/* React */}
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-black"
        >
          <TbBrandNextjs className="text-7xl" /> {/* Next.js */}
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-green-600"
        >
          <SiMongodb className="text-7xl text-green-600" /> {/* MongoDB */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-green-500"
        >
          <FaNodeJs className="text-7xl text-green-500" /> {/* Node.js */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-500"
        >
          <SiExpress className="text-7xl text-blue-500" /> {/* Express */}
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-600"
        >
          <SiFigma className="text-7xl text-purple-600" /> {/* Figma */}
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-pink-600"
        >
          <SiAdobexd className="text-7xl text-pink-600" /> {/* Adobe XD */}
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-400"
        >
          <SiCanva className="text-7xl text-blue-400" /> {/* Canva */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
