import { motion } from "framer-motion";

export default function ScrollAnimationComponent() {
  return (
    <motion.div
      className="my-component"
      initial={{ opacity: 0, y: 50 }} // Start off-screen from bottom with 0 opacity
      whileInView={{ opacity: 1, y: 0 }} // On scroll, animate to visible position
      viewport={{ once: true }} // Trigger only once when the element comes into view
      transition={{ type: "spring", stiffness: 100, damping: 25 }} // Smooth animation
    >
      <h2 className="text-2xl font-bold">Scroll Down Animation</h2>
      <p className="text-lg text-gray-600">
        This component will animate from the bottom when scrolled into view.
      </p>
    </motion.div>
  );
}
