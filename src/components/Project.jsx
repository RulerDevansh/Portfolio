import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { CurrencyConverter, DiscordColorText, github, Portfolio, RockPaperSissors, Todo, YoutubeFeed, AIchat, FinanceTracker, Uniconnect, Baseliner, SecretSanta } from "../assets";
import { fadeIn , textVariant } from "../utils/motion";
import { SectionWrapper } from "../HigherOrderComponent";
import { useState, useEffect } from "react";

const projects = [

    {
      name: "AIChat",
      description:
      "Developed full-stack chat app with real-time messaging, seen/online status using Socket.IO and secure JWT-based auth with user profile updates and connection system. Used Google Gemini API for smart AI responses, and chat summarization.",
      tags: [
        { name: "Node",      color: "green-text-gradient"  },
        { name: "React",     color: "blue-text-gradient"   },
        { name: "MongoDB",   color: "pink-text-gradient"   },
        { name: "Socket.IO", color: "orange-text-gradient" },
      ],
      image: AIchat,
      source_code_link: "https://github.com/RulerDevansh/AI-chatApp",
      Deploy_link: "https://devansh-ai-chat.vercel.app",
    },

    {
      name: "Automated Finance Tracker",
      description:
        "Full-stack AI finance automation platform managing transactions, budgets & reporting with PostgreSQL-backed relational consistency. AI Copilot supports natural-language expense/budget actions, reducing manual effort by 70%. Features automated email alerts covering 90%+ of recurring finance activities, real-time dashboards, and multi-currency FX conversion.",
      tags: [
        { name: "React",       color: "blue-text-gradient"   },
        { name: "Node.js",     color: "green-text-gradient"  },
        { name: "PostgreSQL",  color: "pink-text-gradient"   },
        { name: "Gemini API",  color: "orange-text-gradient" },
      ],
      image: FinanceTracker,
      source_code_link: "https://financetrackeraipowered.vercel.app",
      Deploy_link: "https://financetrackeraipowered.vercel.app",
    },

    {
      name: "UniConnect",
      description:
        "College-exclusive marketplace supporting buy/sell, bidding, bargaining & bill-sharing with real-time one-to-one and group communication via Socket.IO. Implemented FastAPI-based ML microservice with a fine-tuned EfficientNet transfer-learning pipeline to classify and block restricted/abusive listings in real time.",
      tags: [
        { name: "React",       color: "blue-text-gradient"   },
        { name: "Node.js",     color: "green-text-gradient"  },
        { name: "MongoDB",     color: "pink-text-gradient"   },
        { name: "FastAPI",     color: "blue-text-gradient"   },
      ],
      image: Uniconnect,
      source_code_link: "https://github.com/RulerDevansh/UNICONNECT",
      Deploy_link: "https://github.com/RulerDevansh/UNICONNECT",
    },

    {
      name: "Secret Santa Exchange",
      description:
        "Full-stack Secret Santa organiser with Google One Tap + email/password auth. Create private groups via shareable 6-char codes, let members submit wish forms, and the app auto-assigns Santas and instantly emails wish lists via Nodemailer — all in a festive Christmas-themed UI.",
      tags: [
        { name: "React",      color: "blue-text-gradient"   },
        { name: "Node.js",    color: "green-text-gradient"  },
        { name: "MongoDB",    color: "pink-text-gradient"   },
        { name: "Nodemailer", color: "orange-text-gradient" },
      ],
      image: SecretSanta,
      source_code_link: "https://github.com/RulerDevansh/SecretSanta",
      Deploy_link: "https://secret-santa-service-phi.vercel.app",
    },

    {
      name: "Baseliner — VS Code Extension",
      description:
        "Published VS Code extension that scans HTML/CSS files for non-Baseline web features and surfaces inline diagnostics directly in the editor. Leverages Gemini API to rewrite unsupported features into Baseline-compliant alternatives, enhancing developer productivity by minimizing manual compatibility corrections.",
      tags: [
        { name: "TypeScript",   color: "blue-text-gradient"   },
        { name: "VS Code API",  color: "green-text-gradient"  },
        { name: "Gemini API",   color: "pink-text-gradient"   },
        { name: "Node.js",      color: "orange-text-gradient" },
      ],
      image: Baseliner,
      source_code_link: "https://github.com/RulerDevansh/Baseliner",
      Deploy_link: "https://marketplace.visualstudio.com/items?itemName=Devansh.baseliner",
    },

    {
      name: "Discord Colored Text Generator",
      description:
      "This app generates Discord-colored text code. App Demonstrates the use of Mantine UI, regex, and innerHTML manipulation.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mantine UI",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: DiscordColorText,
      source_code_link: "https://github.com/RulerDevansh/Discord_Colored_Text",
      Deploy_link : "https://discord-colored-text-ten.vercel.app",
    },

    {
      name: "Todo App",
      description:
          "A multi-user task management app where each user maintains a separate task list. Utilizes Redux for global state and user-specific task handling, with Redux Thunk to fetch public IP and real-time timestamp when adding tasks.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
       },
      ],
      image: Todo,
      source_code_link: "https://github.com/RulerDevansh/Todo-APP",
      Deploy_link: "https://todo-app-devansh.web.app",
    },

    
    {
      name: "Currency Converter",
      description:
      "A TypeScript-based Currency Converter App that enables users to convert currencies in real-time demonstrating the use of API's",
      tags: [
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: CurrencyConverter,
      source_code_link: "https://github.com/RulerDevansh/CurrencyConverterTypeScript",
      Deploy_link : "https://currency-converter-devansh.web.app",
    },

    {
        name: "Youtube FeedEnhancer",
        description:
          "A Python Script that uses llama AI To search Given Keyword on Youtube and Improve User's Feed",
        tags: [
          {
            name: "Python",
            color: "blue-text-gradient",
          },
          {
            name: "llama-3.1-8b",
            color: "green-text-gradient",
          },
        ],
        image: YoutubeFeed,
        source_code_link: "https://github.com/RulerDevansh/YouTube-Feed-Enhancer",
        Deploy_link: "https://github.com/RulerDevansh/YouTube-Feed-Enhancer",
    },

    {
      name: "Rock Paper Scissors Game",
      description:
        "Rock Paper Scissors Game which also stores score Using HTML CSS JS",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: RockPaperSissors,
      source_code_link: "https://github.com/RulerDevansh/Rock-paper-scissors-game",
      Deploy_link: "https://rock-paper-scissors-devansh.web.app",
    },

    {
      name: "My Portfolio",
      description:
      "A Portfolio Website that showcases my skills, projects, and contact information.Demonstrates the use of Spline, Threjs, Framer-Motion, React-Router, Emailjs react libraries",
      tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Spline",
        color: "pink-text-gradient",
      },
      ],
      image: Portfolio,
        source_code_link: "https://github.com/RulerDevansh/Portfolio",
        Deploy_link: "https://devansh-srivastava-portfolio.web.app",
    },
  ];



// Defined OUTSIDE Project so its identity is stable across re-renders.
// If it were inside, React would see a new component type on every render
// and unmount+remount cards, breaking Framer Motion animations.
const ProjectCard = ({ index, name, description, tags, image, source_code_link, Deploy_link, isMobile }) => {
    if (isMobile) {
      return (
        <div
          className='bg-tertiary p-5 rounded-2xl w-[360px] opacity-0 animate-fade-in'
          style={{
            animationDelay: `${index * 150}ms`,
            animationFillMode: 'forwards',
          }}
        >
          <div className='relative w-full h-[230px]' onClick={() => window.open(Deploy_link, "_blank")}>
            <img src={image} alt='project_image' className='w-full h-full object-cover rounded-2xl' loading="eager" />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] h-[90px] overflow-y-auto desc-scroll pr-1'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </div>
      );
    }

    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.5)}>
        <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 rounded-2xl w-[360px]'>
          <div className='relative w-full h-[230px]' onClick={() => window.open(Deploy_link, "_blank")}>
            <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
              loading={index > 2 ? "lazy" : "eager"}
            />
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              <div
                onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
              >
                <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          </div>
          <div className='mt-5'>
            <h3 className='text-white font-bold text-[24px]'>{name}</h3>
            <p className='mt-2 text-secondary text-[14px] h-[90px] overflow-y-auto desc-scroll pr-1'>{description}</p>
          </div>
          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
};

function Project() {
    // Lazy initialisers: read the real value on first render so there is never
    // a mismatch that triggers a corrective re-render (which caused the flash).
    const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
    const [visibleProjects, setVisibleProjects] = useState(() =>
        window.innerWidth < 768 ? 4 : projects.length
    );

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            setVisibleProjects(mobile ? 4 : projects.length);
        };
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
    <>
        <motion.div variants={textVariant()}>
          <h2 className='text-violet-300 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>
            My Projects
          </h2>
          <motion.p
            variants={fadeIn("","",0.1,1)}
            className='mt-4 text-violet-200 text-[17px] max-w-3xl leading-[30px]'
          >
            Here are some of the projects I&apos;ve worked on. Click on the cards image to view the Deployed WebSite.
          </motion.p>
        </motion.div>

        <div className='mt-20 flex flex-wrap gap-7 align-center justify-center min-h-[300px]'>
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} isMobile={isMobile} {...project} />
          ))}
        </div>

      {isMobile && visibleProjects < projects.length && (
        <div className='flex justify-center mt-8'>
          <button
            onClick={() => setVisibleProjects(prev => Math.min(prev + 2, projects.length))}
            className='bg-tertiary hover:bg-violet-900 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300'
          >
            Load More Projects ({projects.length - visibleProjects} remaining)
          </button>
        </div>
      )}
    </>
  )
}

export default SectionWrapper(Project, "projects", 0.05)
