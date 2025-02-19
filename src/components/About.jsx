import React from 'react'
import Tilt from 'react-parallax-tilt'; // using for tilt effect
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import { reactjs, redux, spline, tailwind } from '../assets';
import { SectionWrapper } from '../HigherOrderComponent';

const Skills = [
  {
    title: "React ",
    icon: reactjs,
  },
  {
    title: "3D Model Designing In Spline",
    icon: spline,
  },
  {
    title: "Tailwind Css",
    icon: tailwind,
  },
  {
    title: "Redux",
    icon: redux,
  },
];


const SkillsCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.65)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Technology Card'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


function About() {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
        <h2
        className='text-violet-300 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
        >
          About Myself
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-violet-200 text-[17px] max-w-3xl leading-[30px] '
      >
        I'm a passionate web developer with a strong focus on front-end technologies.<br/>  
        I specialize in <b>React</b> and have experience working with libraries like <b>React Router DOM, Framer Motion, Material UI, and Redux</b> to build dynamic and interactive user interfaces.<br/><br/>  

        Beyond web development, I also explore <b>3D design</b> using <b>Spline</b> and have a basic understanding of <b>Three.js</b> for integrating 3D elements into web applications.<br/><br/>  

        Currently, I'm a <b>second-year college student</b> at <b>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, PUNE. (IIITP) </b>dedicated to expanding my skills and staying up-to-date with the latest advancements in web technologies.<br/>  
        I'm always eager to learn, experiment, and bring creative ideas to life through code.<br/><br/>  

        Let's connect and build something amazing! 🚀 <br /><br /><br />
      </motion.p>
      <motion.div
      variants={textVariant(.5)}
      >
        <h2
        className='text-violet-300 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'
        >
          Technologies I Know
        </h2>
      </motion.div>
      <div className='mt-20 flex flex-wrap gap-10'>
        {Skills.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About,"about",false);