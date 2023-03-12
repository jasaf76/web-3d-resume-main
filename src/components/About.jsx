import React from "react"
import Tilt from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { me,ich } from "../assets"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Einführung</p>
        <h2 className={styles.sectionHeadText}>Überblick.</h2>
      </motion.div>

      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] min-[1000px]:max-w-lg w-full leading-[30px]">
          Ich bin José, Jahre alt und komme aus Volgograd, Russland. Seit fast 2
          Jahren beschäftige ich mich aktiv mit der Webentwicklung und lerne
          ständig neue Technologien, um sie anzuwenden. Ich habe an der
          GeekBrains IT-Universität im Bereich "Full Stack JavaScript
          Development" studiert. Ich kann gut im Team arbeiten und schätze die
          Zusammenarbeit mit anderen. Auch für die Arbeit im Homeoffice kann ich
          mich gut organisieren. Meine Erfahrungen kommen nicht nur meinem
          eigenen Fähigkeitsschatz zugute, sondern werden auch aktiv in der
          Produktentwicklung genutzt. Ich lerne gerne von erfahreneren Kollegen
          und bilde mich zusätzlich auch selbstständig weiter. Auf meinem
          GitHub-Profil sind bereits über 35 nonkommerzielle Projekte zu finden.
          Außerdem plane ich, meine Fähigkeiten im Bereich der mobilen
          Entwicklung mit Hilfe des React Native Frameworks zu verbessern.
          Darüber hinaus entwickle ich auch gerne 8-Bit-Spiele mit dem
          PICO-8-Engine (Lua).
        </motion.p>

        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14 mt-[20px]">
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] max-h-[500px] flex justify-evenly items-center flex-col overflow-hidden">
              <img
                src={ich}
                alt="MyPhoto"
                className="w-full h-full object-contain"
                style={{ transform: "translateY(20px)" }}
              />
            </div>
          </motion.div>
        </Tilt>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about")
