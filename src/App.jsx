import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ServicesSection from "./components/Features";
import Technology from "./components/Technology";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      {/* Scroll animation applied to Header */}
      <motion.section
        initial={{ opacity: 0, y: 50 }} // Start off-screen with opacity 0
        whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
        viewport={{ once: true }} // Trigger animation once when in view
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <Header />
      </motion.section>

      {/* Scroll animation applied to ServicesSection */}
      <motion.section
        initial={{ opacity: 0, y: 50 }} // Start off-screen with opacity 0
        whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
        viewport={{ once: true }} // Trigger animation once when in view
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <ServicesSection />
      </motion.section>

      {/* Scroll animation applied to Technology */}
      <motion.section
        initial={{ opacity: 0, y: 50 }} // Start off-screen with opacity 0
        whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
        viewport={{ once: true }} // Trigger animation once when in view
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <Technology />
      </motion.section>

      {/* Scroll animation applied to WhatWeDo */}
      <motion.section
        initial={{ opacity: 0, y: 50 }} // Start off-screen with opacity 0
        whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
        viewport={{ once: true }} // Trigger animation once when in view
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <WhatWeDo />
      </motion.section>

      {/* Scroll animation applied to Footer */}
      <motion.section
        initial={{ opacity: 0, y: 50 }} // Start off-screen with opacity 0
        whileInView={{ opacity: 1, y: 0 }} // Animate when it comes into view
        viewport={{ once: true }} // Trigger animation once when in view
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <Footer />
      </motion.section>
    </>
  );
}

export default App;
