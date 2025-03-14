import React from 'react'
import Tilt from 'react-parallax-tilt'; // using for tilt effect
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import { c, cpp, css, dsa, html, java, javascript, oop, python, reactjs, redux, spline, sql, tailwind } from '../assets';
import { SectionWrapper } from '../HigherOrderComponent';
import { staggerContainer } from '../utils/motion';


const libraries = [
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
const techstack = [
  {
    title: " DSA ",
    icon: dsa,
  },
  {
    title: " C ",
    icon: c,
  },
  {
    title: " C++ ",
    icon: cpp,
  },
  {
    title: " Java ",
    icon: java,
  },
  {
    title: " Python ",
    icon : python,
  },
  {
    title: " SQL ",
    icon: sql,
  },
  {
    title: "Object Oriented Programming",
    icon: oop,
  },
  {
    title: " HTML ",
    icon : html,
  },
  {
    title: " CSS ",
    icon: css,
  },
  {
    title: " JavaScript ",
    icon: javascript,
  },
];

const SkillsCard = ({ index, title, icon }) => (
  <Tilt className='w-32 sm:w-48'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 h-36 sm:min-h-48 flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='Technology Card'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[18px] sm:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


function About() {
  return (
    <motion.section
            variants={staggerContainer()}
            className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
            id="about"
            initial='hidden'
            whileInView='show'
            viewport={{once:true, amount: 0.05}}
          >
      <motion.div
      variants={textVariant()}
      >
        <span className='hash-span'>
          &nbsp;
        </span>

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
        I'm a passionate web developer with a strong focus on front-end technologies.<br />  
I specialize in <b>React</b> and have experience working with libraries like <b>React Router DOM, Framer Motion, Material UI, and Redux</b> to build dynamic and interactive user interfaces.<br /><br />  

Beyond web development, I also explore <b>3D design</b> using <b>Spline</b> and have a basic understanding of <b>Three.js</b> for integrating 3D elements into web applications.<br /><br />  

In addition to front-end development, I have a solid foundation in <b>Data Structures & Algorithms (DSA)</b> and programming languages like <b>C, C++, Java, Python, and JavaScript</b>.<br />  
I am also proficient in <b>Object-Oriented Programming (OOP)</b> and <b>SQL</b> for database management.<br /><br />  

Currently, I'm a <b>second-year college student</b> at <b>INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, PUNE (IIITP)</b>, dedicated to expanding my skills and staying up-to-date with the latest advancements in web technologies.<br />  
I'm always eager to learn, experiment, and bring creative ideas to life through code.<br /><br />  

Let's connect and build something amazing! 🚀<br /><br />

      </motion.p>
      <motion.div
      variants={textVariant(.5)}
      >
        <h2
        className='text-violet-300 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]'
        >
          My Tech Stack
        </h2>
      </motion.div>
      <div className='mt-10 flex flex-wrap  align-center justify-center gap-2 sm:gap-10'>
        {techstack.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
      <br /><br />
      <motion.div
      variants={textVariant(.5)}
      >
        <h2
        className='text-violet-300 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]'
        >
          Liberaries / Tools I Know
        </h2>
      </motion.div>
      <div className='mt-10 flex flex-wrap  align-center justify-center gap-2 sm:gap-10'>
        {libraries.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
      <br /><br />
      <motion.div
      variants={textVariant(.5)}
      >
        <h2
        className='text-violet-300 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] '
        >
          My Current Ratings <motion.span
        className="inline-block text-[20px] text-violet-500"
        animate={{
          opacity: [1, 0, 1],
          transition: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }
        }}
          >These Update In RealTime !! 😊</motion.span> 
        </h2>
      </motion.div>      
    </motion.section>
      )
}

export default SectionWrapper(About,"about");