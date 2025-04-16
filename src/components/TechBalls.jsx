import { useEffect, useState } from "react";
import { SectionWrapper } from "../HigherOrderComponent";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { Ball } from "./canvas";
import { css, git, html, javascript, reactjs, redux, spline, tailwind, threejs, typescript } from "../assets";

const technologies = [
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "TypeScript", icon: typescript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Three JS", icon: threejs },
  { name: "Spline", icon: spline },
  { name: "git", icon: git },

];

function TechBalls() {
  const [displayTechs, setDisplayTechs] = useState(technologies);

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // Check if the device is mobile
    if (isMobile) {
      const shuffledTechs = [...technologies].sort(() => 0.5 - Math.random()); // Shuffle array
      setDisplayTechs(shuffledTechs.slice(0, 6)); // Pick 6 random items
    }
  }, []);

  return (
    <>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="m-2 text-violet-200 text-[20px] max-w-3xl leading-[30px]">
        Have fun spinning the Tech balls around !!
      </motion.p>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {displayTechs.map((tech) => (
          <div className="w-28 h-28 cursor-pointer" key={tech.name}>
            <Ball icon={tech.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(TechBalls, "about");
