import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#c2eb09]" />
          <div className="w-1 sm:h-80 h-40 amber-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-lime-600">
              Hi, <span className="mx-2"> </span>
            </span>{" "}
            Ich bin <span className="text-amber-500">José</span>
          </h1>
          <p className={`${styles.heroSubText} mt-[20px] text-amber-500`}>
            Ich entwickle
            <span className="mx-2"> </span>
            <span className="text-lime-700">3D-Visuals</span>
            <br className="sm:block hidden" />
            benutzeroberflächen und Web-Anwendungen.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
