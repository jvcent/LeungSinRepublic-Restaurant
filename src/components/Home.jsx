import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const Home = () => {
  return (
    // <section> for grouping semantically related content together under a heading
    <section className="relative w-full h-screen mx-auto">
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.paddingX} text-white absolute inset-0 top-[350px] max-w-8xl mx-auto`}
      >
        <h3 className={`${styles.headText}`}>
          Leung Sin Republic
          <span className="mando font-medium whitespace-nowrap">
            {" "}
            梁善麻辣燙
          </span>
        </h3>
        <p className={`${styles.subText}`}>
          Express Hong Kong Malatang Cuisine
        </p>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Home, "home");
