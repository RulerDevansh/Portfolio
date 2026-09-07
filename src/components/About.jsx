import Tilt from 'react-parallax-tilt'; // using for tilt effect
import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { fadeIn, textVariant } from "../utils/motion";
import {
  c, cpp, java, python, javascript, typescript,
  reactjs, redux, docker, html, css,
  nodejs, express,
  mysql, postgresql, mongodb,
  tensorflow, sklearn, numpy, pandas,
  git, github, socketio, dsa, oop,
} from '../assets';
import { SectionWrapper } from '../HigherOrderComponent';
import { staggerContainer } from '../utils/motion';
import Rating from "./Rating";


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
  { title: "Docker",      icon: docker     },
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

const experiences = [
  {
    title: "Core Member, Web Development Team",
    company_name: "ICONCLAVE college event",
    date: "Jan 2026 - Mar 2026",
    points: [
      "Collaborated with designers to translate event requirements into production-ready layouts.",
      "Contributed to the event website and implemented responsive UI components for attendee-facing sections.",
      "Worked with the team to deliver polished pages on a tight event timeline.",
    ],
  },
  {
    title: "SDE Intern",
    company_name: "Baseraa",
    date: "Jun 2026 - Present",
    points: [
      "Developing a unified restaurant growth platform integrating customer review data from Google Maps and Zomato with AI-driven sentiment analysis and actionable business insights.",
      "Engineering an AI ad studio for generating and launching targeted marketing campaigns across Meta, Google, and WhatsApp, with automated audience targeting and campaign workflows.",
      "Building multi-outlet management, approval-based discount distribution, and revenue projection modules to enable data-driven marketing and operational decision-making.",
    ],
  },
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

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 0 0 4px rgba(255,255,255,0.12)",
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <span className="h-3 w-3 rounded-full bg-violet-400" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${experience.company_name}-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};


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
        className='mt-4 text-violet-200 text-[17px] max-w-3xl leading-[30px]'

        >

        I'm a <b>Full Stack MERN Developer</b> focused on building <b>scalable, real-time, and AI-powered applications</b> using <b>React, Node.js, Express.js, MongoDB, PostgreSQL</b>, and <b>Redis</b>.<br /><br />

        I have hands-on experience with <b>System Design, Docker, AWS, FastAPI, TensorFlow</b>, and building high-performance backend systems with caching, authentication, REST APIs, and real-time communication using <b>Socket.IO</b>.<br /><br />

        Currently, I'm a <b>final-year B.Tech CSE student</b> at <b>Indian Institute of Information Technology, Pune</b>, pursuing an Honors specialization in <b>Artificial Intelligence</b>. I enjoy solving challenging problems, learning how large-scale systems work, and turning ideas into impactful software. 🚀
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
        <h2 className='text-violet-300 font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px]'>
          Work Experience.
        </h2>
      </motion.div>
      <div className='mt-12 flex flex-col'>
        <VerticalTimeline lineColor="#ffffff">
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>

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
          My Current Ratings
        </h2>
      </motion.div>
      <div className='mt-8'>
        <Rating />
      </div>
    </>
      )
}

export default SectionWrapper(About, "about", 0.05);