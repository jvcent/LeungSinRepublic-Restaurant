// framer-motion is an animation library
import { motion } from "framer-motion";

import { styles } from "../styles";
// staggerContainer is the specific animation variant used in this file
import { staggerContainer } from "../utils/motion";

// Will wrap all major sections with this Higher Order Component
// Gives responsive formatting, load-in animations
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.paddingX}max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
