import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { popular, malatang, breakfast, noodles, drinks } from "../constants";

const MenuItem = ({ index, ch, eng, price, img }) => {
  return (
    <div className="xs:w-[380px] w-full p-[10px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-white rounded-[20px] p-[5px] min-h-[170px] justify-between items-center flex flex-row"
        >
          <div className="text-black pl-2">
            <h4 className={`text-[22px] mando font-semibold`}>{ch}</h4>
            <p className={`text-[17px]`}>{eng}</p>
            <br />
            <p className={`text-[17px]`}>{price}</p>
          </div>
          <img
            src={img}
            alt={eng}
            className="max-w-[100%] w-[160px] aspect-square object-cover rounded-[20px]"
          />
        </div>
      </motion.div>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="relative w-full h-auto mx-auto ">
      <motion.div
        variants={textVariant()}
        className={`${styles.paddingX} text-white inset-0 max-w-8xl mx-auto`}
      >
        <h2 className={`text-[30px] mt-10`}>
          Menu<span className="mando font-medium"> 菜單</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h2 className={`${styles.paddingX} text-white text-[23px]`}>
          Popular 受歡迎
        </h2>
      </motion.div>

      <div className="pl-[50px] flex flex-wrap gap-2">
        {popular.map((item, index) => (
          <MenuItem key={item.eng} index={index} {...item} />
        ))}
      </div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h2 className={`${styles.paddingX} text-white text-[23px]`}>
          Malatang 港式麻辣燙
        </h2>
      </motion.div>

      <div className="pl-[50px] flex flex-wrap gap-2">
        {malatang.map((item, index) => (
          <MenuItem key={item.eng} index={index} {...item} />
        ))}
      </div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h2 className={`${styles.paddingX} text-white text-[23px]`}>
          Breakfast 全天早餐
        </h2>
      </motion.div>

      <div className="pl-[50px] flex flex-wrap gap-2">
        {breakfast.map((item, index) => (
          <MenuItem key={item.eng} index={index} {...item} />
        ))}
      </div>

      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h2 className={`${styles.paddingX} text-white text-[23px]`}>
          Noodles 麵食全餐
        </h2>
      </motion.div>

      <div className="pl-[50px] pb-5 flex flex-wrap gap-2">
        {noodles.map((item, index) => (
          <MenuItem key={item.eng} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Menu, "menu");
