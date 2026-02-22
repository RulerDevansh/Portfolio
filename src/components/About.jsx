import Tilt from 'react-parallax-tilt'; // using for tilt effect
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from "../utils/motion";
import {
  c, cpp, java, python, javascript, typescript,
  reactjs, redux, tailwind, html, css,
  nodejs, express,
  mysql, postgresql, mongodb,
  tensorflow, sklearn, numpy, pandas,
  git, github, socketio, dsa, oop,
} from '../assets';
import { SectionWrapper } from '../HigherOrderComponent';
import { staggerContainer } from '../utils/motion';


const programmingLanguages = [
  { title: "C",          icon: c          },
  { title: "C++",        icon: cpp        },
  { title: "Java",       icon: java       },
  { title: "Python",     icon: python     },
  { title: "JavaScript", icon: javascript },
  { title: "TypeScript", icon: typescript },
];

const webDevelopment = [
  { title: "React.js",    icon: reactjs    },
  { title: "Redux",       icon: redux      },
  { title: "Tailwind CSS",icon: tailwind   },
  { title: "HTML5",       icon: html       },
  { title: "CSS3",        icon: css        },
  { title: "Node.js",     icon: nodejs     },
  { title: "Express.js",  icon: express    },
  { title: "MySQL",       icon: mysql      },
  { title: "PostgreSQL",  icon: postgresql },
  { title: "MongoDB",     icon: mongodb    },
];

const otherConcepts = [
  { title: "TensorFlow",  icon: tensorflow },
  { title: "scikit-learn",icon: sklearn    },
  { title: "NumPy",       icon: numpy      },
  { title: "Pandas",      icon: pandas     },
  { title: "Git",         icon: git        },
  { title: "GitHub",      icon: github     },
  { title: "Socket.IO",   icon: socketio   },
  { title: "DSA",         icon: dsa        },
  { title: "OOPs",        icon: oop        },
];

const SkillsCard = ({ index, title, icon }) => (
  <Tilt className='w-32 sm:w-48' tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1} transitionSpeed={450}>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.08, 0.5)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
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
    <>
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
        I'm a passionate web developer with experience in building full-stack applications using <b>React, Node.js, Express.js</b>, and <b>MongoDB</b>.<br />  
I’ve worked extensively with libraries like <b>Redux, React Router DOM, Framer Motion, Mantine UI</b>, and <b>Tailwind CSS</b> to build responsive and interactive user interfaces.<br />

I have developed real-time applications using <b>Socket.IO</b>, and have experience integrating <b>AI models</b> into web applications—handling prompts, generating responses, and using them dynamically within the UI. I've also deployed projects on platforms like <b>Vercel</b> , <b>Firebase</b> <b>DigitalOcean</b>.<br /><br />

Beyond core development, I enjoy experimenting with <b>3D design</b> using <b>Spline</b> and have a working understanding of <b>Three.js</b> for embedding 3D elements in web applications.<br /><br />  

I’m also proficient in <b>Data Structures & Algorithms (DSA)</b> and programming languages like <b>C, C++, Java, Python, JavaScript</b>, and <b>TypeScript</b>, with a solid foundation in <b>Object-Oriented Programming (OOP)</b> and <b>SQL</b>.<br />

Currently, I’m a <b>third-year student</b> at <b>Indian Institute of Information Technology, Pune (IIITP)</b>, constantly working to expand my skills and stay updated with evolving web technologies.<br />  
I love exploring new tools, solving real-world problems, and bringing ideas to life through code.<br /><br />  

Let's connect and build something impactful! 🚀<br /><br />


      </motion.p>

      <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-2 mb-16">
        <a
          href="https://drive.google.com/file/d/1QElYmSPrSGs1j9C1KN9DXx_ZNu1XR_tv/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-violet-700 hover:bg-violet-600 hover:scale-110 active:scale-95 transition-all duration-300 text-white font-bold py-3 px-8 rounded-xl shadow-md shadow-violet-900"
        >
          View Resume
        </a>
      </motion.div>

      <motion.div variants={textVariant(.5)}>
        <h2 className='text-violet-300 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
          My Tech Stack
        </h2>
      </motion.div>
      <div className='mt-4' />
      <motion.div variants={textVariant(.5)}>
        <h2 className='text-violet-300 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]'>
          Programming Languages
        </h2>
      </motion.div>
      <motion.div
        variants={staggerContainer(0.08)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='mt-10 flex flex-wrap align-center justify-center gap-2 sm:gap-10'
      >
        {programmingLanguages.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} />
        ))}
      </motion.div>
      <div className='mt-12' />
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className='text-violet-300 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]'>
          Web Development
        </h2>
      </motion.div>
      <motion.div
        variants={staggerContainer(0.08)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='mt-10 flex flex-wrap align-center justify-center gap-2 sm:gap-10'
      >
        {webDevelopment.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} />
        ))}
      </motion.div>
      <div className='mt-12' />
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className='text-violet-300 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]'>
          Other Concepts &amp; Libraries
        </h2>
      </motion.div>
      <motion.div
        variants={staggerContainer(0.08)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        className='mt-10 flex flex-wrap align-center justify-center gap-2 sm:gap-10'
      >
        {otherConcepts.map((skill, index) => (
          <SkillsCard key={skill.title} index={index} {...skill} />
        ))}
      </motion.div>
      <div className='mt-12' />
      <motion.div variants={textVariant(.5)}>
        <h2 className='text-violet-300 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] '>
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
    </>
      )
}

export default SectionWrapper(About, "about", 0.05);