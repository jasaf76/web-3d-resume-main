import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt
   
      className="bg-tertiary p-5 rounded-2xl sm:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}>
        <div
          className="relative w-full h-[230px]"
          options={{ max: 45, scale: 1, speed: 450 }}>
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};
const Works = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Meine Arbeit</p>
        <h2 className={styles.sectionHeadText}>Projekten.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px]  max-w-5xl leading-[30px]">
          Ich bin stolz darauf, Ihnen eine Auswahl meiner umfangreichen und
          ansprechenden Projekte präsentieren zu können, die meine Fähigkeiten
          und Erfahrungen als Entwickler veranschaulichen. Jedes Projekt ist
          eine repräsentative Arbeit mit realen Beispielen und ist kurz
          beschrieben und mit Links zu Code-Repositorien und Live-Demos
          versehen. Eines meiner bemerkenswertesten Projekte ist eine
          React.js-Webanwendung für ein Online-Shop-Unternehmen, die es Kunden
          ermöglicht, Produkte online zu kaufen. Ich war für die Entwicklung und
          Implementierung der Front-End-Funktionen verantwortlich, darunter die
          Implementierung responsiven Designs, die Sicherstellung der
          Browserkompatibilität und die Integration von Zahlungssystemen. Dieses
          Projekt ist eine hervorragende Demonstration meiner Fähigkeit,
          komplexe Probleme zu lösen und verschiedene Technologien wie React.js
          , Flutter(Dart), Python oder PHP zu verwenden. Ein weiteres Projekt,
          an dem ich gearbeitet habe, ist eine Flutter-Mobile-App für eine
          digitale Marketingagentur. Zu meinen Aufgaben gehörten die Entwicklung
          ansprechender Designs, die Implementierung von Funktionen für
          Push-Benachrichtigungen und die Integration von
          Social-Media-Plattformen. Das Projekt zeigt meine Fähigkeit, effektiv
          mit funktionsübergreifenden Teams zusammenzuarbeiten und komplexe
          Projekte effektiv zu verwalten. Diese Projekte sind nur einige
          Beispiele für meine umfangreichen und schönen Projekte, die meine
          Fähigkeiten als Entwickler demonstrieren. Ich bin stolz darauf,
          komplexe Probleme zu lösen und effektiv mit funktionsübergreifenden
          Teams zusammenzuarbeiten, um Produkte von höchster Qualität zu
          erstellen.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
