import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Delivery = () => {
  return (
    <div className="relative min-h-[700px] mx-auto grid">
      <div className={`gridbox ${styles.paddingX}`}>
        <motion.div
          variants={textVariant()}
          className={`text-white inset-0 max-w-8xl mx-auto`}
        >
          <h2 className={`text-white md:text-[30px] text-[25px]`}>
            Delivery Services
            <span className="mando font-medium whitespace-nowrap">
              {" "}
              送貨服務
            </span>
          </h2>
        </motion.div>

        <div class="wrapper">
          <a
            href="https://www.ubereats.com/ca/store/leung-sin-republic/sie9Tq9ORvCxWJ664mAEjA/cf1bdbe6-bb69-4714-b82a-38bf4319ab61?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjglMjBCYWxkd2luJTIwU3QlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJFaWs0SUVKaGJHUjNhVzRnVTNRc0lGUnZjbTl1ZEc4c0lFOU9JRTAxVkNBeFRESXNJRU5oYm1Ga1lTSXdFaTRLRkFvU0NYSHB6VF9HTkN1SUVRcjRKRmdoM2t1d0VBZ3FGQW9TQ2VzZTZhckdOQ3VJRVFNQTBPMmwwMDZNJTIyJTJDJTIycmVmZXJlbmNlVHlwZSUyMiUzQSUyMmdvb2dsZV9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQzLjY1NjM3MzIlMkMlMjJsb25naXR1ZGUlMjIlM0EtNzkuMzkyNjU4NCU3RA%3D%3D&ps=1"
            target="_blank"
          >
            <div class="button">
              <div class="icon ml-[2px]">
                <i>
                  <img src="/ubereats.png" />
                </i>
              </div>
              <span>Ubereats</span>
            </div>
          </a>
          <a
            href="https://www.fantuanorder.com/store/leung-sin-malatang/ca-14765"
            target="_blank"
          >
            <div class="button">
              <div class="icon ml-[2px]">
                <i>
                  <img src="/fantuan.jpg" />
                </i>
              </div>
              <span>Fantuan</span>
            </div>
          </a>
          <a
            href="https://www.skipthedishes.com/leung-sin-malattong-baldwin"
            target="_blank"
          >
            <div class="button">
              <div class="icon ml-[2px]">
                <i>
                  <img src="/skip the dishes.png" />
                </i>
              </div>
              <span>Skip</span>
            </div>
          </a>
          <a
            href="https://store.ritual.co/order/leung-sin-malatang-baldwin-street-toronto/2297?q=leung+sin&op=1&lat=43.6562765&lon=-79.3930142&city=toronto-on"
            target="_blank"
          >
            <div class="button">
              <div class="icon ml-[2px]">
                <i>
                  <img src="/ritual.jpg" />
                </i>
              </div>
              <span>Ritual</span>
            </div>
          </a>
        </div>

        <div class="details">
          <motion.div
            variants={textVariant()}
            className={`text-white inset-0 max-w-8xl mx-auto`}
          >
            <p class="details-title sm:text-[22px] text-[17px]">
              OPERATIONAL HOURS{" "}
            </p>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)}>
            <div className="sm:text-[20px] text-[15px]">
              <p class="days">Sunday - Monday</p>
              <p>11:27 p.m. - 7:00 a.m. • SIGNATURES</p>
              <p class="days">Tuesday</p>
              <p>11:27 p.m. - 7:00 a.m. • SIGNATURES</p>
              <p>05:26 a.m. - 7:00 a.m. • SIGNATURES LITE</p>
              <p class="days">Wednesday - Thursday</p>
              <p>11:27 p.m. - 7:00 a.m. • SIGNATURES</p>
              <p class="days">Friday - Saturday</p>
              <p>Closed</p>
              <br />
              <p class="details-title">LOCATION</p>
              <div>5 Baldwin St, Toronto, ON M5T 1L1</div>
            </div>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Delivery, "order");
